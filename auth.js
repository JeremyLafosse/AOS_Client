function login(data, success, error) {
            $http.post('http://localhost:8081/api/signin', data).then(function(response){
                if(response.data == false) {
                    error();
                }
                else {
                    $localStorage.token = response.data.token;
                    window.location = 'http://localhost/AOS_Client/app/#/home';
                    success();
                }

            });
}