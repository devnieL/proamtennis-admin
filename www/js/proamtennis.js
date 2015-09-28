/*
* ProAmTennis Admin
* frontend structure bootstrapped by
* https://github.com/brwr/thinkster-django-angular
*
* @author devnieL, focker123
**/


  angular
  .module('proamtennis', [
    'ionic',
    'proamtennis.utils',
    'proamtennis.constants',
    'proamtennis.routes',
    'proamtennis.controllers'
  ]);

  angular.module('proamtennis.utils', []);
  angular.module('proamtennis.constants', []);
  angular.module('proamtennis.services', []);
  angular.module('proamtennis.controllers', ['proamtennis.services', 'proamtennis.utils', 'proamtennis.factories']);
  angular.module('proamtennis.routes', ['proamtennis.utils', 'proamtennis.services']);

  angular
  .module('proamtennis')
  .run(run);

  run.$inject = ['$ionicPlatform', '$rootScope', '$state', 'AuthService', 'APP_EVENTS'];

  function run($ionicPlatform, $rootScope, $state, AuthService, APP_EVENTS) {

    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
    });

    // Review : http://devdactic.com/user-auth-angularjs-ionic/
    // This stateChangeStart will be called each time
    // that the app change its state with $state.go()

    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, fromState){
      if(!AuthService.isAuthenticated()){
        if(next.name !== 'login'){
          event.preventDefault();
          $state.go("login");
        };
      };

    });
  }
