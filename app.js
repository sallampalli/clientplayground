
var myApp = angular.module('myApp', ['ngRoute','ui.bootstrap','ngSanitize']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/role',{
        templateUrl:'role.html',
        controller:'roleController'
    }).when('/user', {
        templateUrl:'user.html',
        controller:'userController'
    }).when('/remote', {
        templateUrl:'remote.html',
        controller:'remoteController'
    }).otherwise('/role')
}]);

myApp.controller('roleController',['$scope', '$http', function($scope, $http){
    $scope.roles=[];
    $scope.add = function(param) {
        $scope.roles.push(param);
        $scope.role ={};
    };

    $scope.removeRole = function(param){
        $scope.roles.pop(param);
    };
    $scope.open1 = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened1 = true;
    };

    $scope.open2 = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened2 = true;
    };

}]);

myApp.controller('userController',['$scope', '$http', function($scope, $http){

}]);

myApp.controller('remoteController',['$scope', '$http', function($scope, $http){

    $scope.getDirections = function(){
        var req = {
            method: "GET",
            headers : {'X-Mashape-Key':'0z565x7HADmshNtNzfBRbCUt99YEp1d2LwRjsnwqKyZYS3RrgV'},
            params: {ending: $scope.ending,starting:$scope.starting}
        };

        $http.get("https://montanaflynn-mapit.p.mashape.com/directions",req)
            .success(function(data){
                $scope.res = data;
            })
            .error(function(data){
                alert('Error consuming the service');
            });
    };

}]);