angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Lomme2',
    marker : 'L',
    lastText: '4 étages',
    url: 'dash',
    face: 'img/lomme2_photo.png',
    lng: '3.018',
    lat:'50.632'

  }, {
    id: 1,
    name: 'Bretagne',
    marker : 'B',
    lastText: '1 étage',
    url: 'bretagne',
    face: 'img/bretagne_photo.png',
    lng: '3.021',
    lat:'50.634'
  }, {
    id: 2,
    name: 'Tereneo-A',
    marker : 'TA',
    lastText: '4 étages',
    url: '#',
    face: 'img/tereneo-a_photo.png',
    lng: '3.022',
    lat:'50.633'
  }, {
    id: 3,
    name: 'Tereneo-B',
    marker : 'TB',
    lastText: '4 étages',
    url: '#',
    face: 'img/tereneo-a_photo.png',
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
