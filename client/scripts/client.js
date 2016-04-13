var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.
        when('/home', {
            templateUrl: '/views/routes/home.html',
        }).
        when('/search', {
            templateUrl: '/views/routes/search.html',
            controller: 'SearchController'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);
