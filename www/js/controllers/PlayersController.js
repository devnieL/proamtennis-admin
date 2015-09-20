angular
  .module('proamtennis.controllers')
  .controller('PlayersController', function($scope, $ionicPopup, $timeout) {

    console.log('New Access to players');

    $scope.players = [{
      name: 'Antonio',
      id: 1
    }, {
      name: 'Bartolo',
      id: 2
    }, {
      name: 'César',
      id: 3
    }, {
      name: 'Dario',
      id: 4
    }, {
      name: 'Ernesto',
      id: 5
    }, {
      name: 'Fabio',
      id: 6
    }];

    $scope.addPlayer = function() {
      $scope.newPlayer = {};
      // Custom form for new player
      var playerPopup = $ionicPopup.show({
        template: '<input type="text" ng-model="newPlayer.name">',
        title: 'Ingresa la información del nuevo jugador',
        scope: $scope,
        buttons: [{
          text: 'Cancelar'
        }, {
          text: '<b>Guardar</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.newPlayer.name) {
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            } else {
              var player = $scope.newPlayer;
              $scope.newPlayer = {};
              $scope.players.push(player);

              return $scope.newPlayer.name;
            }
          }
        }]
      });

    };
  });
