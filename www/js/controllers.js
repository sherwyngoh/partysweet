angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('EventsCtrl', function($scope, Events, $state) {

  Events.then(function(result) {
    $scope.events = result["parties"]
    // angular.forEach(result["parties"], function(value,key){
    //   var partyEvent = value
    //   console.log(value.party_users)
    // })
})

  $scope.goToEvent = function(eventId) {
    $state.go('event', {"eventId": eventId} )
  }

  $scope.newEvent = function(){
    $state.go('newEvent')  
  }
})

.controller('EventCtrl', function($scope, Events, $stateParams, $ionicPopup, $state) {

  $scope.showDetailsBool = true;

  $scope.showDetails = function(){
    $scope.showDetailsBool = true;
    $scope.showMessagesBool = false;
    $scope.showAttendeesBool = false;
  }

  $scope.showMessages = function(){
    $scope.showMessagesBool = true;
    $scope.showAttendeesBool = false;
    $scope.showDetailsBool = false;
  }

  $scope.showAttendees = function(){
    $scope.showAttendeesBool = true;
    $scope.showMessagesBool = false;
    $scope.showDetailsBool = false;
  }

  $scope.goToEvents = function() {
    $state.go('events')
  }

  Events.then(function(result) {
    $scope.events = result["parties"]
    angular.forEach($scope.events, function(value,key){
      if(value.id == $stateParams.eventId){
        $scope.event = value
      }
    })

    angular.forEach($scope.event.party_invitations, function(value,key){
      if(value.host === true){
        angular.forEach($scope.event.party_users, function(user,key){
          if(value.host == user.id){
            $scope.host = user
            console.log(user)
          }
        })
      }
      // console.log(value)
    })
  })
})

.controller('AccountCtrl', function($scope) {
})

.controller("NewEventCtrl", function($scope, $ionicModal,$filter,$state){
  $scope.event = {}
  $scope.contacts = JSON.parse(window.localStorage['contacts'] || "[]")

  $ionicModal.fromTemplateUrl('templates/modal.html', 
   function(modal) {
    $scope.modal = modal;
   },
   {
   // Use our scope for the scope of the modal to keep it simple
   scope: $scope, 
   // The animation we want to use for the modal entrance
   animation: 'slide-in-up'

 }
 );

  $ionicModal.fromTemplateUrl('templates/date-modal.html', 
   function(modal) {
    $scope.datemodal = modal;
  },
  {
    scope: $scope, 
    animation: 'slide-in-up'
  }
  );

  $scope.openDateModal = function() {
   $scope.datemodal.show();
 };
 $scope.closeDateModal = function(model) {
   $scope.datemodal.hide();
   $scope.event.date = model;
   $scope.event.formatted_date = $filter('date')(model, 'fullDate');
 };

 $scope.goToContacts = function(event) {
  window.localStorage['newEvent'] = JSON.stringify(event)
  console.log(window.localStorage)
  $state.go('contacts', {"event": event} )
}
})

.controller('ContactsCtrl', function($scope, $state, Contacts) {
  $scope.contacts =  typeof(window.localStorage['contacts']) !== 'undefined' ? JSON.parse(window.localStorage['contacts']) : Contacts.all()

  $scope.saveContacts = function(contacts) {
    console.log(contacts)
    window.localStorage['contacts'] = JSON.stringify(contacts)
    console.log(JSON.stringify(contacts))
    $state.go("newPackingList")
  }

  document.addEventListener("deviceready", onDeviceReady, false);

  function onDeviceReady() {
    console.log('lol')
    console.log(navigator.contacts);
    $scope.contacts = navigator.contacts
  }
})

.controller('NewPackingListCtrl', function($scope, $state, $rootScope) {
  $scope.items = JSON.parse(window.localStorage['items'] || "[]")
  $scope.newItem = function() {
    $scope.items.push({})
  }
  
  $scope.showDelete = false

  $scope.showEdit = function(){
    $scope.showDelete = !$scope.showDelete
  }

  // $scope.$watch("items", function(newVal, oldVal){
  //   $scope.totalCost = 0
  //   angular.forEach($scope.items, function(value,key){
  //     $scope.totalCost += Number(value.costPerItem)
  //   })
  // },true)

$scope.saveItems = function(items) {
  window.localStorage['items'] = JSON.stringify(items)
  $rootScope.amountToCharge = $scope.amountToCharge
  $state.go("summary")
} 

$scope.amountToCharge = 15
var contacts = JSON.parse(window.localStorage['contacts'] || {})
var invited = contacts.filter( function(item){return (item.checked == true);} );
$scope.contactsCount = invited.length
})

.controller('SummaryCtrl', function($scope, $state, $rootScope, $http, $q) {
  var newParty = JSON.parse(window.localStorage["newEvent"])
  newParty.price = $rootScope.amountToCharge
  var contacts = JSON.parse(window.localStorage['contacts'] || {})
  var invited = contacts.filter( function(item){return (item.checked == true);} );
  invited[0].host = true
  newParty.party_user = invited
  newParty.party_items = JSON.parse(window.localStorage["items"])
  console.log(newParty)
  newParty.image = "img/1.jpg" 

  $http.post('http://localhost:3000/api/parties', {party:  newParty}).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
})

.controller('PaymentCtrl', function($scope, $state, $stateParams, $rootScope, $http) {
  var braintreeToken = "eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiIxYjc0NDI3NjkwZTg0ODZiN2I4MzBkMjMxOWUwZTBjMTE5YTM1MDE3ZjBmNjdjNDFlMjNiODAzZmU0YjUzZjNkfGNyZWF0ZWRfYXQ9MjAxNC0xMi0wNlQyMzoxNjowMi4yNDMyMTUwNjQrMDAwMFx1MDAyNm1lcmNoYW50X2lkPXY2eWh0N25tYzhkNm12dzJcdTAwMjZwdWJsaWNfa2V5PTR5dnRzNnluaDZ2d2JzZ3kiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvdjZ5aHQ3bm1jOGQ2bXZ3Mi9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbXSwicGF5bWVudEFwcHMiOltdLCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvdjZ5aHQ3bm1jOGQ2bXZ3Mi9jbGllbnRfYXBpIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhbmFseXRpY3MiOnsidXJsIjoiaHR0cHM6Ly9jbGllbnQtYW5hbHl0aWNzLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20ifSwidGhyZWVEU2VjdXJlRW5hYmxlZCI6ZmFsc2UsInBheXBhbEVuYWJsZWQiOnRydWUsInBheXBhbCI6eyJkaXNwbGF5TmFtZSI6IlBBUlRZU1dFRVQiLCJjbGllbnRJZCI6bnVsbCwicHJpdmFjeVVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS9wcCIsInVzZXJBZ3JlZW1lbnRVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vdG9zIiwiYmFzZVVybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9jaGVja291dC5wYXlwYWwuY29tIiwiZGlyZWN0QmFzZVVybCI6bnVsbCwiYWxsb3dIdHRwIjp0cnVlLCJlbnZpcm9ubWVudE5vTmV0d29yayI6dHJ1ZSwiZW52aXJvbm1lbnQiOiJvZmZsaW5lIiwibWVyY2hhbnRBY2NvdW50SWQiOiI3MnRmeXlja3E2bnhkanI1IiwiY3VycmVuY3lJc29Db2RlIjoiVVNEIn0sImNvaW5iYXNlRW5hYmxlZCI6ZmFsc2UsIm1lcmNoYW50SWQiOiJ2NnlodDdubWM4ZDZtdncyIiwidmVubW8iOiJvZmYifQ=="
  $scope.lol = 0
  braintree.setup(braintreeToken, 'dropin', {
    container: 'dropin',
    paymentMethodNonceReceived: function (event, nonce) {
    $scope.lol = nonce
        $scope.paymentProcessed = function() {

    $http.post('https://partysweet-api.herokuapp.com/api/parties/pay', {nonce: nonce,price:  10 }).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });

  }
    }
  });
})
;
