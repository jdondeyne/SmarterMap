angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope, $stateParams, $ionicPopup) {

  $scope.$on("$ionicView.enter", function() {
    callMain();
  });

  $scope.saviezVous = function(nomVille){

    var alertPopup = $ionicPopup.alert({
     title: nomVille,
     template: 'Commune française située en région hauts-de-France.'
    });

  };


})


.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('BretagneCtrl', function($scope) {
    $scope.$on("$ionicView.enter", function() {
    callMain();
  });

  
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
