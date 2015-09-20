  angular
  .module('proamtennis.routes', [])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      // Each state's controller can be found in controllers.js
      $stateProvider

      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html"
      })

      .state('app.search', {
        url: "/search",
        views: {
          'menuContent' :{
            templateUrl: "templates/search.html"
          }
        }
      })

      .state('app.players', {
        url: "/players",
        views: {
          'menuContent' :{
            templateUrl: "templates/players.html",
            controller: 'PlayersController'
          }
        }
      })

      .state('login', {
          url: '/login',
          templateUrl: 'templates/login.html',
          controller: 'LoginController'
      })

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.tournaments', {
        url: '/tournaments',
        views: {
          'tab-tournaments': {
            templateUrl: 'templates/tab-tournaments.html',
            controller: 'TournamentsController'
          }
        }
      })

      .state('tab.chats', {
          url: '/chats',
          views: {
            'tab-chats': {
              templateUrl: 'templates/tab-chats.html',
              controller: 'ChatsController'
            }
          }
        })
        .state('tab.chat-detail', {
          url: '/chats/:chatId',
          views: {
            'tab-chats': {
              templateUrl: 'templates/chat-detail.html',
              controller: 'ChatDetailController'
            }
          }
        })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountController'
          }
        }
      });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login');
      // $urlRouterProvider.otherwise('/tab/dash');

    }]);
