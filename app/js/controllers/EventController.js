'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.event =
            {
                name: 'Angular Boot Camp',
                date: '23/2/2017',
                time: '7:12 AM',
                location:
                {
                    address: 'Google Palo Alto',
                    city: 'Palo Alto',
                    province: 'CA'
                },
                imageUrl : '/img/angularjs-logo.png'
            };
    });