angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('EventsCtrl', function($scope, Events) {
  $scope.events = Events.all();
})

.controller('EventCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.get($stateParams.eventId);
	$scope.contacts = function(){
		$state.go('newEvent.contacts')	
	}
})

.controller('AccountCtrl', function($scope) {
})

.controller("NewEventCtrl", function($scope){
	$scope.events = {}

})

.controller('ContactsCtrl', function($scope){
})

.controller('PackingListCtrl', function($scope) {
  $scope.packingList = [
    {itemName: "Pizza", QtyPerPerson: 1, PricePerPerson: 10}
  ]
})

;
