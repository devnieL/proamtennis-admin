/**
 * LoginService
 * @namespace proamtennis.services
 */

angular
  .module('proamtennis.services')
  .service('TournamentsService', function($q, $timeout) {

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
      searchTournaments: searchTournaments
    }

  });
