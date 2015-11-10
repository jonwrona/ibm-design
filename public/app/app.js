angular.module('app', [
    'ngAnimate',
    'ngRoute',
    'ngMaterial',
    'uiGmapgoogle-maps'
]).config(function($routeProvider, $locationProvider) {
    $routeProvider
    // home page (events)
        .when('/', {
            templateUrl: 'app/views/events.html'
        })
        // map
        .when('/map', {
            templateUrl: 'app/views/map.html'
        });
    $locationProvider.html5Mode(true);
}).controller('AppCtrl', function($scope, $mdSidenav, $mdDialog) {
    $scope.toggleLeft = function() {
        $mdSidenav('left').toggle();
    };

    $scope.showAbout = function(ev) {
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('About')
            .content('An Angular App built by Jonathan Wrona for the IBM Design interview process!')
            .ariaLabel('About')
            .ok('Got it!')
            .targetEvent(ev)
        );
    };

    $scope.map = {
        center: {
            latitude: 30.25,
            longitude: -97.75
        },
        zoom: 10,
        options: {
            draggable: true
        }
    };

    $(window).resize(function() {
        var total = $(window).height();
        var toolbar = $("#toolbar").height();
        $(".angular-google-map-container").css('height', total - toolbar);
    });
}).controller('EventsCtrl', function($scope) {
    $scope.eventsList = [{
        name: "Event 1",
        loc: "2134 Blah Street, Austin, TX",
        img: "http://placehold.it/800x300",
        desc: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."
    }, {
        name: "Event 1",
        loc: "2134 Blah Street, Austin, TX",
        img: "http://placehold.it/800x300",
        desc: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."
    }, {
        name: "Event 1",
        loc: "2134 Blah Street, Austin, TX",
        img: "http://placehold.it/800x400",
        desc: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."
    }, {
        name: "Event 1",
        loc: "2134 Blah Street, Austin, TX",
        img: "http://placehold.it/800x200",
        desc: "The titles of Washed Out's breakthrough song and the first single from Paracosm share the two most important words in Ernest Greene's musical language: feel it. It's a simple request, as well..."
    }];

    console.log($scope.eventsList);
});
