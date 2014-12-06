angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('EventsCtrl', function($scope, Events, $state) {
  $scope.events = Events.all();
  $scope.goToEvent = function(eventId) {
    $state.go('event', {"eventId": eventId} )
  }
})

.controller('EventCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.get($stateParams.eventId);
})

.controller('AccountCtrl', function($scope) {
})

.controller("newEventCtrl", function($scope){
})

.controller('ContactsCtrl', function($scope){
})

.controller('PackingListCtrl', function($scope) {
})

;
