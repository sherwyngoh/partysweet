angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Events', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var events = [
    {id: 0, title: "Party Apocalypso", description: "Amazing party", location: "Clark Quay", img: "img/1.jpg"},
    {id: 1, title: "Masquerade Exotica", description: "Mind blowing party", location: "Orchard Road", img: "img/2.jpg"},
    {id: 2, title: "Chillennium", description: "Cool blue", location: "M Hotel", img: "img/3.jpg"},
    {id: 3, title: "Vodka Tsunami", description: "Whooosh", location: "Carlton Hotel", img: "img/1.jpg"},
    {id: 4, title: "House Vibrations", description: "mmmmmmmmmm", location: "Carlton Hotel", img: "img/4.jpeg"},
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

.factory("Contacts", function(){
  var contacts = [
    {id: 0, name: "Dollie Carpenter", checked: false},
    {id: 1, name: "Bernie Whistler", checked: false},
    {id: 2, name: "Cammy Propes", checked: false},
    {id: 3, name: "Hisako Heacock", checked: false},
    {id: 4, name: "Marge Brummond", checked: false},
    {id: 5, name: "Tressie Emling", checked: false},
    {id: 6, name: "Darryl Bustos", checked: false},
    {id: 7, name: "Adolfo Kash", checked: false},
    {id: 8, name: "Julissa Bragan", checked: false},
    {id: 9, name: "Bernetta Lafortune", checked: false},
    {id: 10, name: "Joseph Wimer", checked: false},
    {id: 11, name: "Ulrike Mcnaughton", checked: false},
    {id: 12, name: "Loralee Gwinn", checked: false},
    {id: 13, name: "Damion Gartner", checked: false},
    {id: 14, name: "Penny Bone", checked: false},
    {id: 15, name: "Stanton Pesina", checked: false},
    {id: 16, name: "Denny Cowans", checked: false},
    {id: 17, name: "Lynelle Julian", checked: false},
    {id: 18, name: "Virgil Copp", checked: false},
    {id: 19, name: "Odilia Gosser", checked: false},
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
