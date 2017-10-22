angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Lomme2',
    marker : 'L2',
    lastText: '4 étages',
    url: 'dash',
    face: 'img/batiment-lomme2.png',
    lng: '3.018',
    lat:'50.632',
    salles: [
      {
        name: "Zuydcoote",
        lvl: "1",
        num: "00004"
      },
      {
        name: "Béthune",
        lvl: "1",
        num: "00024" 
      },
      {
        name: "Bouvines",
        lvl: "1",
        num: "00028" 
      },
      {
        name: "Bray-Dunes",
        lvl: "2",
        num: "01013" 
      },
      {
        name: "Tourcoing",
        lvl: "2",
        num: "01015" 
      },
      {
        name: "Lewarde",
        lvl: "2",
        num: "01047" 
      },
      {
        name: "Wasquehal",
        lvl: "2",
        num: "01048" 
      },
      {
        name: "Roubaix",
        lvl: "3",
        num: "02015" 
      },
      {
        name: "Lomme",
        lvl: "3",
        num: "02050" 
      },
      {
        name: "Lille",
        lvl: "3",
        num: "03050" 
      }
    ]

  }, 
  {
    id: 1,
    name: 'Bretagne',
    marker : 'BR',
    lastText: '1 étage',
    url: 'bretagne',
    face: 'img/batiment-bretagne.png',
    lng: '3.021',
    lat:'50.634',
    salles : [
      {
        name: "Dublin",
        lvl: "2",
        num: "B.20.C" 
      },
      {
        name: "Milan",
        lvl: "2",
        num: "A.05.H" 
      },
      {
        name: "Prague",
        lvl: "2",
        num: "A.04.H" 
      }
     
    ]

  }, {
    id: 2,
    name: 'Terraneo-A',
    marker : 'TA',
    lastText: '4 étages',
    url: '#',
    face: 'img/batiment-terraneo-a.png',
    lng: '3.022',
    lat:'50.633'
  }, {
    id: 3,
    name: 'Terraneo-B',
    marker : 'TB',
    lastText: '4 étages',
    url: '#',
    face: 'img/batiment-terraneo-b.png',
    lng: '3.020',
    lat:'50.631'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
