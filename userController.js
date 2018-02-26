angular.module('aos.logoutController', ['ngRoute']).controller('logoutController', function($scope, $http, $location) {
     $scope.Logout = function()
            {
                $http({
                        url: "http://localhost:8081/logout",
                        method: "POST",
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        data: $.param(localStorage.getItem("token"))
                    }).success(function(response, status, headers, config) {
                        //store token value
                        localStorage.setItem("token",'response.data.token');
                       
                        $location.url('/');
                    }).error(function(data, status, headers, config) {
                        $scope.status = status;
                    })
            }});    