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
  }
})

.controller('MapCtrl', function($scope){
  
    //IOS API KEY = AIzaSyC9eUt14RtODdTmpwTqMkTAn4I8c1Vn40Q
  
    //ANDROID API KEY = AIzaSyCluAkVx1XEk3tODxRz91xwXif5sNRFVZQ
    
      var latLng = new google.maps.LatLng(50.633, 3.0203);
    
      var mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
    
      $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
      //Wait until the map is loaded
      google.maps.event.addListenerOnce($scope.map, 'idle', function(){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            animation: google.maps.Animation.DROP,
            position: latLng
        });      
        
        var infoWindow = new google.maps.InfoWindow({
            content: "Here I am!"
        });
        
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open($scope.map, marker);
        });
    
        google.maps.event.addListener($scope.map, 'click', function(e){
          console.log(e.latLng.toJSON());
        });
        
        /*
        Object { lat: 50.63311128649952, lng: 3.022511601448059 }  controllers.js:116:7
        Object { lat: 50.63282547028087, lng: 3.0217444896698 }  controllers.js:116:7
        Object { lat: 50.632372924380604, lng: 3.022168278694153 }  controllers.js:116:7
        Object { lat: 50.632675756329924, lng: 3.02298903465271 }
        */
    
        // Define the LatLng coordinates for the polygon's path.
        var terraneoCoords = [
          {lat: 50.6331, lng: 3.0225},
          {lat: 50.6328, lng: 3.0217},
          {lat: 50.6323, lng: 3.0221},
          {lat: 50.6326, lng: 3.0229}
        ];
    
        // Construct the polygon.
        var terraneoForm = new google.maps.Polygon({
          paths: terraneoCoords,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        });
        terraneoForm.setMap($scope.map);
  
    }); //end map listener
  
});
