
var app=angular.module('mainApp',['ngRoute']);

app.controller('people',function($scope,$http) {
    $http.get('http://localhost:63342/Final/database.json')
        .then(function(response){
            $scope.persons=response.data.records;

        });

});
