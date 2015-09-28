  angular
  .module('proamtennis.routes')
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$httpProvider',
    function($stateProvider, $urlRouterProvider, $httpProvider) {

      // @devniel
      // Intercepting $http request to add token authorization header to requests
      // from $http service, remember that with its provider we could config
      // a service. Based on :
      // https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/

      $httpProvider.interceptors.push('AuthInterceptor');

      // Ionic uses AngularUI Router which uses the concept of states
      // Learn more here: https://github.com/angular-ui/ui-router
      // Set up the various states which the app can be in.
      // Each state's controller can be found in controllers.js
      $stateProvider

      // =============================================
      // APP
      // =============================================

      .state('login', {
          url: '/login',
          templateUrl: 'templates/login.html',
          controller: 'LoginController'
      })

      .state('tournament', {
        url: "/tournaments/:tournamentId",
        abstract: true,
        templateUrl: "templates/tournament-menu.html"
      })

      .state('tournament.detail', {
        url: "",
        views: {
          'content' :{
            templateUrl: "templates/tournament.html",
            controller: 'TournamentController'
          }
        }
      })

      // =============================================
      // TABS
      // =============================================

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

      .state('tournaments.tournament', {
        url: "/:tournamentId",
        views: {
          'content' :{
            templateUrl: "templates/tournament.html",
            controller: 'TournamentController'
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

      $urlRouterProvider.otherwise(function($injector, $location){
        var $state = $injector.get("$state");
        $state.go("tab.tournaments");
      });

    }]);
