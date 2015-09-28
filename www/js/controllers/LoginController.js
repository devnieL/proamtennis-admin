/**
* LoginController
* @namespace clouai.authentication.controllers
*/

angular
.module('proamtennis.controllers')
.controller('LoginController', function ($scope, AuthService, $ionicPopup, $state, APP_EVENTS) {

  $scope.data = {};

  $scope.login = function() {

      AuthService.login($scope.data.email, $scope.data.password)
      .success(function(data) {
        $state.go('tab.tournaments', {}, {reload:true});
      })
      .error(function(error) {
          var alertPopup = $ionicPopup.alert({
              title: 'Login failed!',
              template: 'Please check your credentials!'
          });
      });
  };

  $scope.$on(APP_EVENTS.AUTH.AUTHENTICATED, function(event){
    console.log(' - - - ');
    AuthService.logout();
    $state.go('tab.tournaments');
  });

});
