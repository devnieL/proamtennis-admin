/**
* AuthService
* @namespace proamtennis.services
* based on : http://devdactic.com/user-auth-angularjs-ionic/
*/

angular
  .module('proamtennis.services')
  .factory('AuthService', function($http, $q, LocalStorage, APP_SETTINGS) {

    var user = null;

    var login = function(email, password){

      // @devniel
      // deferred and promise mode
      // for learning reasons
      // becasue $http.post return already
      // a promise

      var deferred = $q.defer();

      $http.post(APP_SETTINGS.API_URL + '/auth/login/', {
        email : email,
        password : password
      })
      .success(function(response){
        var data = response.data;
        user = data.user;
        LocalStorage.set('token', data.token);
        LocalStorage.setObject('user', data.user);
        deferred.resolve(response.data);
      })
      .error(function(error){
        deferred.reject(error);
      });

      var promise = deferred.promise;

      promise.success = function(fn) {
        promise.then(fn);
        return promise;
      };

      promise.error = function(fn) {
        promise.then(null, fn);
        return promise;
      };

      return promise;
    };

    var destroyAuthenticationData = function(){
      LocalStorage.set('token', null);
      LocalStorage.setObject('user', null);
    };

    var loadAuthenticationData = function(){
      console.log('loadAuthenticationData')
      if(LocalStorage.getObject('user')){
          user = LocalStorage.getObject('user');
      }else{
        destroyAuthenticationData();
      }
    };

    var logout = function(callback){
      destroyAuthenticationData();
      callback();
    };

    loadAuthenticationData();

    return {
      user : user,
      isAuthenticated : function(){
        // Check scope of JS vanilla
        // again. 'user' in the returned object
        // will save a memory address
        if(user == null)
          return false;
        return true;
      },
      login : login,
      logout : logout
    }

  });
