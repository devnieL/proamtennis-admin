/**
 * LoginService
 * @namespace proamtennis.services
 */

angular
  .module('proamtennis.services')
  .service('TournamentsService', function($q, $timeout, $http, APP_SETTINGS) {

    // Get Tournaments assigned to current User

    var getByCurrentUser = function(){

      // We get the current user with the token
      // placed on the Authorization header

      var deferred = $q.defer();

      $http.get(APP_SETTINGS.API_URL + '/tournaments/assigned_to_me/')
      .success(function(response){
        deferred.resolve(response.data);
      }).error(function(error){
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



    // Search Tournaments

    var searchTournaments = function(searchFilter, tournaments) {

      console.log('Searching tournament for ' + searchFilter);

      var deferred = $q.defer();

      var matches = tournaments.filter(function(tournament) {
        if (tournament.name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1) return true;
      })

      $timeout(function() {
        deferred.resolve(matches);
      }, 100);

      return deferred.promise;
    };

    return {
      searchTournaments: searchTournaments,
      getByCurrentUser : getByCurrentUser
    }

  });
