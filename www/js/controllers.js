angular.module('starter.controllers', ['ionic', 'ngCordova'])

.directive('focus', function($timeout) {
    return {
      link: function(scope, element, attrs) {
  
        $timeout(function() {
          element[0].focus(); 
        });
      }
    };
  })


.controller('NavController', function($scope, $state){
    
    $scope.showSearch = function(){
        $state.go('tab.search');
    }
    
})

.controller('SearchCtrl', function($scope, Chats){

    $scope.building = Chats.all();
    $scope.searchData= {};
})


.controller('IndexCtrl', function($scope, $stateParams) {

})

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

/*   //cordova geolocation example, need permissions

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
  }, function(error){
    console.log("Could not get location");
  });
})*/

.controller('MapCtrl', function($scope, Chats){
  
    //IOS API KEY = AIzaSyC9eUt14RtODdTmpwTqMkTAn4I8c1Vn40Q
  
    //ANDROID API KEY = AIzaSyCluAkVx1XEk3tODxRz91xwXif5sNRFVZQ
    
      var latLng = new google.maps.LatLng(50.633, 3.0203);
    
      var mapOptions = {
          center: latLng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [
            {
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "landscape.man_made",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#a1f199"
                  }
              ]
          },
          {
              "featureType": "landscape.natural.landcover",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#37bda2"
                  }
              ]
          },
          {
              "featureType": "landscape.natural.terrain",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#37bda2"
                  }
              ]
          },
          {
              "featureType": "poi.attraction",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.business",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#e4dfd9"
                  }
              ]
          },
          {
              "featureType": "poi.business",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#37bda2"
                  }
              ]
          },
          {
              "featureType": "poi.sports_complex",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "poi.sports_complex",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#84b09e"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#fafeb8"
                  },
                  {
                      "weight": "1.25"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#eae0e0"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "color": "#846868"
                  },
                  {
                      "saturation": "0"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "transit.line",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "transit.station.airport",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#ade8a0"
                  }
              ]
          },
          {
              "featureType": "transit.station.bus",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "transit.station.rail",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#5ddad6"
                  }
              ]
          }
        ]
      };
    
      $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
      //Wait until the map is loaded
      google.maps.event.addListenerOnce($scope.map, 'idle', function(){
        
      //recuperation des batiments
      $scope.building = Chats.all();
       
      for(i in $scope.building){
    
        var b = $scope.building[i];
                
        var marker = new google.maps.Marker({
            map: $scope.map,
            animation: google.maps.Animation.DROP,
            label: b.marker,         
            position: new google.maps.LatLng(b.lat, b.lng)
        }); 

        var content = '<div class="mapsInfo"><h3>'+b.name+'</h3><img src="'+b.face+'" width="100px" heigth="30px"><div><a href="#/tab/'+b.url+'">Indoor view</a></div></div>';
      
        var infoWindow = new google.maps.InfoWindow();
          
        google.maps.event.addListener(marker,'click', (function(marker,content,infoWindow){ 
          return function() {
            infoWindow.setContent(content);
            infoWindow.open($scope.map,marker);
          };
        })(marker,content,infoWindow));  


      }
    
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
  
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
