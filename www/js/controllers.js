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

.controller('EventCtrl', function($scope, $stateParams, Events, PackingItems, $ionicPopup) {
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
	$scope.contacts = function(){
    $state.go('newEvent.contacts')  
  }
	$scope.event = {}

	$scope.createEvent = function(event){
		window.localStorage['newEvent'] = JSON.stringify(event)
		console.log(window.localStorage['newEvent'])
	}

 	$scope.showDatePicker = function() {
	  $ionicPlatform.ready(function() {
			var options = {date: new Date(), mode: 'date'};
		  //var options = {date: new Date(), mode: 'time'}; for time
		  $cordovaDatePicker.show(options).then(function(date){
		     console.log(date)
		  });
		});
 	}
 	//Datepicker shit
	$scope.rightButtons = [
	   { 
	     type: 'button-positive',  
	    content: '<i class="icon ion-navicon"></i>',
	     tap: function(e) {
	         $scope.date = null;
	         $scope.modal.scope.model = {description :"",amount :""};
	         $scope.openModal();
	         
	     }
	   }
   ]


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

.controller('ContactsCtrl', function($scope, $cordovaContacts, $state){
	$scope.event = JSON.parse(window.localStorage['newEvent'] || '{}')
	$scope.saveContact = function(model){
	}
 	console.log(navigator.contacts);

})

.controller('PackingListCtrl', function($scope) {
})

;
