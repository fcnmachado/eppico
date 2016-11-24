var mainModule = angular.module('mainModule', []);

function mainController($scope, $http) {
    $scope.user = {};
    $scope.successMsg = '';
    $scope.failMsg = '';
    $scope.showForm = false;

    // when landing on the page, get all users and show them
    $http.get('/api/users')
        .success(function(data) {
            $scope.users = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createUser = function() {
        $scope.successMsg = '';
        $scope.failMsg = '';
        $http.post('/api/users', $scope.user)
            .success(function(data) {
                $scope.user = {}; // clear the form so our user is ready to enter another
                $scope.successMsg = "Now you are Eppico"
                $scope.showForm = false;
                $scope.users = data;
            })
            .error(function(data) {
                $scope.failMsg = "Email already exists"
                console.log('Error: ' + data);
            });
    };

    // delete a user after checking it
    $scope.deleteUser = function(id) {
        $scope.successMsg = '';
        $scope.failMsg = '';    
        $http.delete('/api/users/' + id)
            .success(function(data) {
                $scope.users = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}