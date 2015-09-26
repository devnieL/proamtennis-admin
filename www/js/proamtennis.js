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
    'proamtennis.routes',
    'proamtennis.controllers'
  ]);

  angular.module('proamtennis.services', []);
  angular.module('proamtennis.controllers', ['proamtennis.services', 'proamtennis.factories']);

  angular
  .module('proamtennis')
  .run(run);

  run.$inject = ['$ionicPlatform'];

  /**
  * @name run
  * @desc Update xsrf $http headers to align with Django's defaults
  */
  function run($ionicPlatform) {

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
  }
