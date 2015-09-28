angular.module('proamtennis.utils')
.factory('AuthInterceptor', ['LocalStorage', '$rootScope', '$q', 'APP_SETTINGS',
  function(LocalStorage, $rootScope, $q, APP_SETTINGS) {
    return {
     request: function (config) {

       config.headers = config.headers || {};

       if(config.url != (APP_SETTINGS.API_URL + '/auth/login/')){
         if(LocalStorage.get('token'))
           config.headers.Authorization = 'Token ' + LocalStorage.get('token');
       }

       return config;
     },
     response: function (response) {
       if (response.status === 401) {
         console.log('not authorized');
       }
       return response || $q.when(response);
     }
    };
}]);
