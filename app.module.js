var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('Tamagotchi', ['ngRoute'])
    .config(function($routeProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: "home/home.html",
          controller: "HomeController"
        })
        .when('/settings', {
          templateUrl: "settings/settings.html",
          controller: "SettingsController"
        })
        .when('/status', {
          templateUrl: "status/status.html",
          controller: "StatusController"
        })
        .when('/game', {
          templateUrl: "game/game.html",
          controller: "GameController"
        })
        .when('/feed', {
          templateUrl: "feed/feed.html",
          controller: "FeedController"
        })
        .when('/404', {
          template: "<h1>404 Page Not Found</h1>",
        })
        .otherwise({
          redirect: "/404"
        })
      })

require('./feed');
require('./home');
require('./game');
require('./settings');
require('./status');
