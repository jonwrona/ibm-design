angular.module('app', [
    'ngAnimate',
    'ngRoute',
    'ngMaterial'
]).config(function($routeProvider, $locationProvider) {
    $routeProvider
    // home page
        .when('/', {
            templateUrl: 'views/home.html'
        })
        // map
        .when('/map', {
            templateUrl: 'views/map.html'
        });
    $locationProvider.html5Mode(true);
}).controller('AppCtrl', function($scope, $mdSidenav) {
    $scope.toggleLeft = function() {
        $mdSidenav('left').toggle();
    }

    $scope.map = {
        center: {
            latitude: 30.25,
            longitude: -97.75
        },
        zoom: 8,
        options: {
            draggable: true,
            minZoom: 4
        }
    };
});
