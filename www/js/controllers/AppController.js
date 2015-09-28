angular
.module('proamtennis.controllers')
.controller('AppController', function($scope, $state, $ionicPopup, AuthService, APP_EVENTS) {

  $scope.user = AuthService.user;

  $scope.$on(APP_EVENTS.AUTH.NOT_AUTHENTICATED, function(event){
    console.log('WTF ----');
    AuthService.logout();
    $state.go('login');
  });

});
