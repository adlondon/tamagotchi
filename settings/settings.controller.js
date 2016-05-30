angular.module('Tamagotchi')
  .controller('SettingsController', function($scope, $rootScope, SettingsService) {
    $scope.setChar = function(charTime, charName, charBirth) {
        var data = {
          charTime: charTime,
          charName: charName,
          charBirth: charBirth
        }
      SettingsService.setChar(data);
    }
  })
