angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('EventsCtrl', function($scope, Events, $state) {
  $scope.events = Events.all();

  $scope.goToEvent = function(eventId) {
    $state.go('event', {"eventId": eventId} )
  }

  $scope.newEvent = function(){
    $state.go('newEvent')  
  }
})

.controller('EventCtrl', function($scope, $stateParams, Events, PackingItems) {
  $scope.event = Events.get($stateParams.eventId);
})

.controller('AccountCtrl', function($scope) {
})

.controller("NewEventCtrl", function($scope){
	$scope.contacts = function(){
    $state.go('newEvent.contacts')  
  }

})

.controller('ContactsCtrl', function($scope){
})

.controller('PackingListCtrl', function($scope) {
})

;
