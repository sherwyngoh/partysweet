angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Events', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var events = [
    {id: 0, title: "Party Apocalypso", description: "Amazing party", location: "Clark Quay"},
    {id: 1, title: "Masquerade Exotica", description: "Mind blowing party", location: "Orchard Road"},
    {id: 2, title: "Chillennium", description: "Cool blue", location: "M Hotel"},
    {id: 3, title: "Vodka Tsunami", description: "Whooosh", location: "Carlton Hotel"},
    {id: 4, title: "House Vibrations", description: "mmmmmmmmmm", location: "Carlton Hotel"},
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
