angular
.module('proamtennis.controllers')
.controller('AccountController', function($scope, $state, AuthService) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.logout = function(){
    AuthService.logout(function(){
      $state.go('login');
    });
  }
  
});
