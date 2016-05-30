angular.module('Tamagotchi')
  .controller('HomeController', function($scope, HomeService) {
    HomeService.getChar()
    .then(function(data) {
      $scope.char = data.data[0];
    });
  })
