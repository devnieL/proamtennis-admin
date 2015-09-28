angular
.module('proamtennis.constants')
.constant('APP_SETTINGS', {
  NAME : 'ProAmTennis Perú 2015',
  API_URL : 'http://apiproamtennisperu.mybluemix.net/v1'
})
.constant('APP_EVENTS', {
  AUTH : {
    AUTHENTICATED : 'authenticated',
    NOT_AUTHENTICATED : 'not_authenticated'
  }
})
.constant('APP_USER_ROLES', {
  admin: 'admin',
  public: 'public'
});
