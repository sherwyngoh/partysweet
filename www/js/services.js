angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Events', function($http, $q) {
    var events, eventsDeferred;
  eventsDeferred = $q.defer();
  events = void 0;
  if (events === void 0) {
    $http({
      method: "GET",
      url: "http://partysweet-api.herokuapp.com/api/parties"
    }).success(function(data) {
      events = data;
      return eventsDeferred.resolve(events);
    });
  } else {
    eventsDeferred.resolve(events);
  }
  return eventsDeferred.promise;
})

// .factory('Events', function($http, $q) {
//     var events, eventsDeferred;
//   eventsDeferred = $q.defer();
//   events = void 0;
//   if (events === void 0) {
//     $http({
//       method: "GET",
//       url: "http://partysweet-api.herokuapp.com/api/parties"
//     }).success(function(data) {
//       events = data;
//       return eventsDeferred.resolve(events);
//     });
//   } else {
//     eventsDeferred.resolve(events);
//   }
//   return eventsDeferred.promise;
// })



.factory('Users', function(){
  var users = [
    {id: 0, username: "Sam", user_avatar: "img/profile.jpg"},
    {id: 1, username: "Sam", user_avatar: "img/profile.jpg"},
    {id: 2, username: "Sam", user_avatar: "img/profile.jpg"},
    {id: 3, username: "Sam", user_avatar: "img/profile.jpg"},
    {id: 4, username: "Sam", user_avatar: "img/profile.jpg"},
  ]

  return {
    all: function() {
      return users;
    },
    get: function(userId) {
      return users[userId];
    }
  }
})

.factory('PackingItems', function(){
  var packingListItems =[
    {id: 0, eventId: 1, itemName: "Pepperoni Pizza", QuantityPerPerson: 1, PricePerPerson: 12, totalAmt: 0},
    {id: 0, eventId: 2, itemName: "Pepperoni Pizza", QuantityPerPerson: 1, PricePerPerson: 12, totalAmt: 0},
    {id: 0, eventId: 3, itemName: "Pepperoni Pizza", QuantityPerPerson: 1, PricePerPerson: 12, totalAmt: 0}, 
    {id: 0, eventId: 1, itemName: "Pepperoni Pizza", QuantityPerPerson: 1, PricePerPerson: 12, totalAmt: 0},
    {id: 0, eventId: 2, itemName: "Pepperoni Pizza", QuantityPerPerson: 1, PricePerPerson: 12, totalAmt: 0},
  ];

  return {
    all: function() {
      return packingListItems;
    },

    get: function(packingItemId){
      return packingListItems[packingItemId];
    }
  }
})

.factory("Contacts", function(){
  var contacts = [
    {id: 0, name: "Dollie Carpenter", number: "1234566778", host: false, checked: false},
    {id: 1, name: "Bernie Whistler", number: "1234566778", host: false,   checked: false},
    {id: 2, name: "Cammy Propes", number: "1234566778", host: false,   checked: false},
    {id: 3, name: "Hisako Heacock", number: "1234566778", host: false,   checked: false},
    {id: 4, name: "Marge Brummond", number: "1234566778", host: false,   checked: false},
    {id: 5, name: "Tressie Emling", number: "1234566778", host: false,   checked: false},
    {id: 6, name: "Darryl Bustos", number: "1234566778", host: false,   checked: false},
    {id: 7, name: "Adolfo Kash", number: "1234566778", host: false,   checked: false},
    {id: 8, name: "Julissa Bragan", number: "1234566778", host: false,   checked: false},
    {id: 9, name: "Bernetta Lafortune", number: "1234566778", host: false,   checked: false},
    {id: 10, name: "Joseph Wimer", number: "1234566778", host: false,   checked: false},
    {id: 11, name: "Ulrike Mcnaughton", number: "1234566778", host: false,   checked: false},
    {id: 12, name: "Loralee Gwinn", number: "1234566778", host: false,   checked: false},
    {id: 13, name: "Damion Gartner", number: "1234566778", host: false,   checked: false},
    {id: 14, name: "Penny Bone", number: "1234566778", host: false,   checked: false},
    {id: 15, name: "Stanton Pesina", number: "1234566778", host: false,   checked: false},
    {id: 16, name: "Denny Cowans", number: "1234566778", host: false,   checked: false},
    {id: 17, name: "Lynelle Julian", number: "1234566778", host: false,   checked: false},
    {id: 18, name: "Virgil Copp", number: "1234566778", host: false,   checked: false},
    {id: 19, name: "Odilia Gosser", number: "1234566778", host: false,   checked: false},
    // {"Crissy Vannest"},
    // {"Carlee Mcsween"},
    // {"Brandee Bronstein"},
    // {"Len Simien"},
    // {"Chieko Wilham"},
    // {"Yajaira Denker"}
  ]

  return {
    all: function() {
      return contacts
    }
  }
})



;
