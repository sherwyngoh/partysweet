
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngCordova', 'pickadate'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    })

    .state('events', {
      url: "/events",
      templateUrl: "templates/events.html",
      controller: "EventsCtrl"
    })

    .state('event', {
      url: "/event/:eventId",
      templateUrl: "templates/event.html",
      controller: "EventCtrl"
    })

    .state('newEvent', {
      url: "/new_event",
      templateUrl: "templates/new_event.html",
      controller: "NewEventCtrl"
    })

    .state('contacts', {
      url: "/contacts",
      templateUrl: "templates/contacts.html",
      controller: "ContactsCtrl"
    })

    .state('newPackingList', {
      url: '/new_packing_list',
      templateUrl: "templates/new-packing-list.html",
      controller: "NewPackingListCtrl"
    })

    .state('summary', {
      url: '/summary',
      templateUrl: "templates/summary.html",
      controller: "SummaryCtrl"
    })

    .state('tab.messages', {
      url: 'event/:eventId/messages',
      views: {
        'tab-contacts': {
          templateUrl: 'templates/tab-contacts.html',
          controller: 'ContactsCtrl'
        }
      }
    })

    .state('tab.packing_list', {
      url: 'event/:eventId/packing_list',
      views: {
        'tab-packing_list': {
          templateUrl: 'templates/tab-packing_list.html',
          controller: 'PackingListCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/events');
});

