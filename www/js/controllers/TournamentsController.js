angular
  .module('proamtennis.controllers')
  .controller('TournamentsController', function($scope, TournamentsService) {


    $scope.tournaments = [];

    $scope.searchQuery = null;

    TournamentsService.getByCurrentUser().success(function(data){
        $scope.tournaments = data;
    }).error(function(error){});

    $scope.settings = {
      enableFriends: true
    };

    $scope.data = {
      "tennis_tournaments": [],
      "search": ''
    };

    tennis_tournaments = [{
      id: 1,
      name: 'ProAmTennis 2015',
      image: 'img/tennis.png',
      status: 'Nuevo'
    }, {
      id: 2,
      name: 'Smarter Games',
      image: 'img/tennis.png',
      status: 'Nuevo'
    }, {
      id: 3,
      name: 'ProAmTennis 2016',
      image: 'img/tennis.png',
      status: 'Nuevo'
    }];


    $scope.data.tennis_tournaments = tennis_tournaments;

    $scope.search = function() {

      TournamentsService.searchTournaments($scope.data.search, tennis_tournaments).then(

        function(matches) {
          $scope.data.tennis_tournaments = matches;
          console.log("matches");
        }
      )
    }
  });
