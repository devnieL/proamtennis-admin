/**
* LoginController
* @namespace clouai.authentication.controllers
*/

angular
.module('proamtennis.controllers')
.controller('LoginController', function ($scope, LoginService, $ionicPopup, $state) {

  $scope.data = {};

  $scope.login = function() {
      LoginService.loginUser($scope.data.code).success(function(data) {
          $state.go('tab.tournaments');
      }).error(function(data) {
          var alertPopup = $ionicPopup.alert({
              title: 'Login failed!',
              template: 'Please check your credentials!'
          });
      });
  }

});
