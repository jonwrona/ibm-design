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
        // weather
        .when('/weather', {
            templateUrl: 'app/views/weather.html'
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

    $scope.eventsList = [{
        name: "IBM Design Interview",
        date: "November 13th, 2015 @ 7:30AM",
        address: "11501 Burnet Road, Austin, TX 78758",
        loc: {lat: 30.401917, lon: -97.715750},
        img: "http://placehold.it/800x300",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id mollis nisi. Quisque vitae molestie lectus. Ut aliquet nunc a elit pulvinar, ac efficitur quam scelerisque. Nulla feugiat facilisis finibus. Fusce et diam arcu. Donec dapibus libero eu auctor laoreet. Aliquam auctor, urna quis rhoncus pharetra, orci quam imperdiet lacus, eu pretium nunc felis at metus. Sed a nulla massa. Donec ut efficitur ex. Nulla venenatis eget quam a auctor."
    }, {
        name: "Residence Inn",
        date: "November 12th, 2015 @ 4:30PM",
        address: "300 E 4th St, Austin, TX 78701",
        loc: {lat: 30.265651, lon: -97.740466},
        img: "http://placehold.it/800x300",
        desc: "Nullam fringilla nisl vel ex fringilla, cursus gravida ipsum laoreet. Duis efficitur mi ac justo tempus varius. Pellentesque in eleifend lacus. Sed auctor elit eget tempor aliquam. Sed molestie finibus molestie. Cras eget lectus vitae orci elementum gravida vulputate et turpis. Nam sit amet sollicitudin augue, non maximus nisi. Curabitur non placerat est, et iaculis libero."
    }, {
        name: "Test Event",
        date: "November 14th, 2015 @ 12:00PM",
        address: "4612 Avenue D, Austin, TX 78751",
        loc: {lat: 30.312023, lon: -97.727818},
        img: "http://placehold.it/800x400",
        desc: "Proin eleifend blandit vehicula. Quisque sed elit auctor, ultricies velit sed, vulputate lectus. Nulla suscipit sem eget ante laoreet, et imperdiet velit convallis. Duis molestie est felis, vitae venenatis ex dignissim a. In hac habitasse platea dictumst. Pellentesque id nunc maximus, vestibulum dui eu, porttitor elit. Mauris ut lectus sollicitudin, porttitor ligula eu, ullamcorper enim. Maecenas vel diam dapibus, fringilla felis vel, interdum massa. Aliquam erat volutpat. Aliquam in urna ut mi lacinia posuere. Praesent rutrum, dui tincidunt laoreet suscipit, purus nisl facilisis ante, eu viverra justo mi tempor risus. Donec et nunc ut massa feugiat vulputate. Ut at convallis libero. Quisque aliquam efficitur sagittis. Phasellus suscipit eu justo non elementum. Aliquam et ipsum congue sapien blandit convallis sed non quam."
    }];

    $(window).resize(function() {
        var total = $(window).height();
        var toolbar = $("#toolbar").height();
        $(".angular-google-map-container").css('height', total - toolbar);
    });
});