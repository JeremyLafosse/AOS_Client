angular.module('aos.logoutController', ['ngRoute']).controller('logoutController', function($scope, $http, $location) {
    
    var data = {
        token: localStorage.getItem("token")
    }
    
    $http.post('http://localhost:8081/user', data).then(function(response) {
        $scope.user = response.data;
        console.log($scope.user.userid);
    })
    
    
     $scope.logout = function()
            {                
                $http({
                        url: "http://localhost:8081/logout/"+$scope.user.userid,
                        method: "DELETE",
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}                 
                    }).then(function(response) {
                        console.log('response');
                        localStorage.deleteItem("token");
                       
                        $location.url('/');
                    })
            }});    