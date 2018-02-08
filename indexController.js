<script>
    $scope.submitForm = function()
            {
                $http({
                        url: "http://localhost/login",
                        method: "POST",
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        data: $.param($scope.form)
                    }).success(function(data, status, headers, config) {
                        $scope.status = status;
                    }).error(function(data, status, headers, config) {
                        $scope.status = status;
                    })
            }
            </script>