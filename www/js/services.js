angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Lomme2',
    lastText: '4 étages',
    face: 'img/lomme2_photo.png'
  }, {
    id: 1,
    name: 'Bretagne',
    lastText: '1 étage',
    face: 'img/bretagne_photo.png'
  }, {
    id: 2,
    name: 'Tereneo-A',
    lastText: '4 étages',
    face: 'img/tereneo-a_photo.jpg'
  }, {
    id: 3,
    name: 'Tereneo-B',
    lastText: '4 étages',
    face: 'img/tereneo-a_photo.jpg'
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
