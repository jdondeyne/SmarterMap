angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Lomme2',
    marker : 'L2',
    url: 'dash',
    face: 'img/batiment-lomme2.png',
    headerImg: 'img/batiment-lomme@2x.png',
    coord : [
      {
        lng : 3.018193244934082,
        lat : 50.63290432511802
      },
      {
        lng : 3.0183280259370804,
        lat : 50.63276992306851
      },
      {
        lng : 3.0180081725120544,
        lat : 50.632620208940644
      },
      {
        lng : 3.0178579688072205,
        lat : 50.632750358181134
      }
    ],
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
    url: 'bretagne',
    face: 'img/batiment-bretagne.png',
    headerImg: 'img/batiment-bretagne@2x.png',
    coord : [
      {
        lng : 3.0210404098033905,
        lat : 50.63423513986116
      },
      {
        lng : 3.0211731791496277,
        lat : 50.63412711092275
      },
      {
        lng : 3.0214373767375946,
        lat : 50.63423258799934
      },
      {
        lng : 3.0213113129138947,
        lat : 50.634353375973745
      }
    ],
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
    name: 'Tereneo-A',
    desc: 'Le Terraneo A est un batiment récemment construit au 102 rue des Templiers. Il accueille plusieurs équipes GBS/GTS. Dans ce batiment vous pourrez également trouver de nombreux espaces agiles.',
    marker : 'TA',
    lastText: '4 étages',
    url: '#',
    face: "img/batiment-terraneo-a.png",
    headerImg: 'img/batiment-terraneo-a@2x.png',
    coord : [
      {
        lng : 3.022018074989319,
        lat : 50.6335854797188
      },
      {
       
        lng : 3.0223211646080017,
        lat : 50.6332790326004
      },
      {
        lng : 3.0216076970100403,
        lat : 50.63300342511726
      },
      {
        lng : 3.0212804675102234,
        lat : 50.63331360640331
      }
    ]
  }, {
    id: 3,
    name: 'Tereneo-B',
    desc: 'Le Terraneo B est le batiment voisin du Terraneo A situé dans la même rue. Il accueille les équipes GTS. Dans ce batiment vous pourrez également trouver de nombreux espaces agiles.',
    marker : 'TB',
    lastText: '4 étages',
    url: '#',
    face: 'img/batiment-terraneo-b.png',
    headerImg: 'img/batiment-terraneo-b@2x.png',
    coord : [
      {
       
        lng : 3.022417724132538 ,
        lat : 50.63320293185997
      },
      {
        lng : 3.0227288603782654,
        lat : 50.63290218450212
      },
      {
        lng : 3.022018074989319,
        lat : 50.63257737519449
      },
      {
        lng : 3.0217042565345764,
        lat : 50.63289015456779
      }
    ]
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
