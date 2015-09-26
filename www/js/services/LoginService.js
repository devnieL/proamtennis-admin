/**
* LoginService
* @namespace proamtennis.services
*/

angular
  .module('proamtennis.services')
  .service('LoginService', function($q) {
    return {
      loginUser: function(code) {
        var deferred = $q.defer();
        var promise = deferred.promise;

        if (code == '1111') {
          deferred.resolve('Welcome ' + name + '!');
        } else {
          deferred.reject('Wrong credentials.');
        }
        promise.success = function(fn) {
          promise.then(fn);
          return promise;
        }
        promise.error = function(fn) {
          promise.then(null, fn);
          return promise;
        }
        return promise;
      }
    }
  });
