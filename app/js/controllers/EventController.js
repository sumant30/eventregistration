'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.bool = true;
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '23/2/2017',
            time: '7:12 AM',
            location: {
                address: 'Google Palo Alto',
                city: 'Palo Alto',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [{
                name: 'Directive Masterclass',
                creatorName: 'Bob Smith',
                duration: '1 hr',
                level: 'Advanced',
                abstract: 'In this session you will learn about directives.',
                upVoteCount: 0
            }, {
                name: 'Scopes for fun and profit',
                creatorName: 'John Doe',
                duration: '30 mins',
                level: 'Introductory',
                abstract: 'This session will take a close look at scope.',
                upVoteCount: 0
            }, {
                name: 'Well Behaved Controller',
                creatorName: 'John Doe',
                duration: '2 hours',
                level: 'Intermediate',
                abstract: 'Will learn to build perfect controllers.',
                upVoteCount: 0
            }]
        };

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        }
    });