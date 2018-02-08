var client = angular.module('myApp', [
  'ngRoute',
  'ngStorage',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', '$httpProvider', '$qprovider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  
  $routeProvider.when('/', {
        templateUrl: "user.html",
controller: "userController"
});

  $routeProvider.otherwise({redirectTo: '/'});
}])();
