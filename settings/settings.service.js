angular
  .module('Tamagotchi')
    .service('SettingsService', function($http) {
      var url = 'https://tiny-tiny.herokuapp.com/collections/tamagotchi'
      function setChar(data) {
        return $http.post(url, data);
      };
      return {
        setChar: setChar
      }
    })
