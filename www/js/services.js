angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Events', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var events = [
    {id: 0, user_id: 1, title: "Party Apocalypso", description: "Amazing party", location: "Clark Quay", img: "img/1.jpg"},
    {id: 1, user_id: 2, title: "Masquerade Exotica", description: "Mind blowing party", location: "Orchard Road", img: "img/2.jpg"},
    {id: 2, user_id: 4, title: "Chillennium", description: "Cool blue", location: "M Hotel", img: "img/3.jpg"},
    {id: 3, user_id: 5, title: "Vodka Tsunami", description: "Whooosh", location: "Carlton Hotel", img: "img/1.jpg"},
    {id: 4, user_id: 1, title: "House Vibrations", description: "mmmmmmmmmm", location: "Carlton Hotel", img: "img/4.jpeg"},
  ];

  return {
    all: function() {
      return events;
    },
    get: function(eventId) {
      return events[eventId];
    }
  }
})


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




;
