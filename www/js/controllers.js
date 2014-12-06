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
		{title: "Party Apocalypso", description: "Amazing party", location: "Clark Quay"},
		{title: "Masquerade Exotica", description: "Mind blowing party", location: "Orchard Road"},
		{title: "Chillennium", description: "Cool blue", location: "M Hotel"},
		{title: "Vodka Tsunami", description: "Whooosh", location: "Carlton Hotel"},
		{title: "House Vibrations", description: "mmmmmmmmmm", location: "Carlton Hotel"},
	]
})

.controller("newEventCtrl", function($scope){
	
})
;

.controller('ContactsCtrl', function($scope){

})

.controller('PackingListCtrl', function($scope) {
})




;
