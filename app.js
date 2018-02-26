angular.module('aos', [
  'ngRoute',
  'ngStorage',
  'aos.FormCtrl',
//'aos.userController'
 'aos.logoutController'
]).config(['$locationProvider', '$routeProvider', '$httpProvider', '$qProvider', function($locationProvider, $routeProvider, $qProvider, $http) {
  
    $locationProvider.hashPrefix('');
   
    $routeProvider.when('/', {
          templateUrl: "form.html",
            controller: "FormCtrl"
    }).when('/user', {
          templateUrl: "user.html",
            controller: "logoutController"
        });

    $routeProvider.otherwise({redirectTo: '/'});
}]);
