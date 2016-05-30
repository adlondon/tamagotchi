angular
  .module('Tamagotchi')
    .service('HomeService', function($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/tamagotchi'
      function getChar() {
        return $http.get(url);
      };
      return {
        getChar: getChar
      }
    })
