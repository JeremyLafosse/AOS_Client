angular.module('aos.FormCtrl', ['ngRoute']).controller('FormCtrl', function($scope, $http, $location) {
    $scope.submitForm = function()
            {
                $http({
                        url: "http://localhost:8081/login",
                        method: "POST",
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        data: $.param($scope.form)
                    }).then(function(response) {
                        console.log(response.data);
                        localStorage.setItem("token",response.data.token);
                       
                        $location.url('/user');
                    }).error(function(data, status, headers, config) {
                        $scope.status = status;
                    })
            }});
