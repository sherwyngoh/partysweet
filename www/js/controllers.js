angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller("EventsCtrl", function($scope) {
	$scope.events = [
		{id: 0, title: "Party Apocalypso", description: "Amazing party", location: "Clark Quay"},
		{id: 1, title: "Masquerade Exotica", description: "Mind blowing party", location: "Orchard Road"},
		{id: 2, title: "Chillennium", description: "Cool blue", location: "M Hotel"},
		{id: 3, title: "Vodka Tsunami", description: "Whooosh", location: "Carlton Hotel"},
		{id: 4, title: "House Vibrations", description: "mmmmmmmmmm", location: "Carlton Hotel"},
	]
})

.controller("EventCtrl",function($scope) {

})

.controller("newEventCtrl", function($scope){
	
})

.controller('ContactsCtrl', function($scope){

})

.controller('PackingListCtrl', function($scope) {
  $scope.packingList = [
    {itemName: "Pizza", QtyPerPerson: 1, PricePerPerson: 10}
  ]
})

;
