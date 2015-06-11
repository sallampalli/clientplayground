/**
 * Created by Sravyatha on 3/21/2015.
 */
var myApp = angular.module('myApp', ['ngRoute','ui.bootstrap']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/role',{
        templateUrl:'role.html',
        controller:'roleController'
    }).when('/user', {
        templateUrl:'user.html',
        controller:'userController'
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