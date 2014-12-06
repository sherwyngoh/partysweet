angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('EventsCtrl', function($scope, Events, $state) {

  Events.then(function(result) {
    $scope.events = result["parties"];
  })

  $scope.goToEvent = function(eventId) {
    $state.go('event', {"eventId": eventId} )
  }

  $scope.newEvent = function(){
    $state.go('newEvent')  
  }
})

.controller('EventCtrl', function($scope, $stateParams, Events, PackingItems, $ionicPopup, $state) {
  $scope.goToEvents = function() {
    $state.go('events')
  }
  $scope.event = Events.get($stateParams.eventId);
  $scope.event.packingList = []
  angular.forEach(PackingItems.all(), function(value, key){
    if (value.eventId == $scope.event.id)
    {
      $scope.event.packingList.push(value)
    }
  })
})

.controller('AccountCtrl', function($scope) {
})

.controller("NewEventCtrl", function($scope, $ionicModal,$filter,$state){
  $scope.contacts = JSON.parse(window.localStorage['contacts'] || {})
  $scope.goToContacts = function(){
    $state.go('contacts')  
  }
  $scope.event = {}

  $scope.createEvent = function(event){
    window.localStorage['newEvent'] = JSON.stringify(event)
    console.log(window.localStorage['newEvent'])
  }

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
  $state.go('contacts', {"event": event} )
}
})

.controller('ContactsCtrl', function($scope, $state, Contacts) {
  $scope.contacts =  JSON.parse(window.localStorage['contacts']) || Contacts.all()

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

.controller('NewPackingListCtrl', function($scope, $state) {
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
    $state.go("summary")
  } 

  $scope.amountToCharge = 15
  var contacts = JSON.parse(window.localStorage['contacts'] || {})
  var invited = contacts.filter( function(item){return (item.checked == true);} );
  $scope.contactsCount = invited.length
})

.controller('SummaryCtrl', function($scope, $state) {
  
})
;
