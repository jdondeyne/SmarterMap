angular.module('starter.controllers', ['ionic', 'ngCordova'])

<<<<<<< HEAD
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

.controller('SearchCtrl', function($scope, Chats, $state){

    $scope.building = Chats.all();
    $scope.searchData= {};

    $scope.openEtage = function(b, s){

        console.log(b);
        console.log(s);

        $state.go('tab.bretagne', {'bat': b, 'salle': s});


    };

})


.controller('DashCtrl', function($scope, $stateParams, $ionicPopup) {
=======

  .controller('LommeCtrl', function($scope, $stateParams, $ionicPopup) {
>>>>>>> batiments

 console.log($stateParams);

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

    .controller('BuildingsCtrl', function ($scope, Buildings) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.buildings = Buildings.all();
        $scope.remove = function (building) {
            Buildings.remove(building);
        };
    })

/*    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })*/

<<<<<<< HEAD

.controller('BretagneCtrl', function($scope, $stateParams) {

    $scope.params = $stateParams;
    console.log($scope.params);
=======
    .controller('BretagneCtrl', function ($scope) {
        $scope.$on("$ionicView.enter", function () {
            callMain();
        });
    })

    .controller('TerraneoaCtrl', function ($scope) {
        $scope.$on("$ionicView.enter", function () {
            callMain();
        });
    })

    .controller('TerraneobCtrl', function ($scope) {
        $scope.$on("$ionicView.enter", function () {
            callMain();
        });
    })
>>>>>>> batiments

    $scope.clickOnLink = function(s){
       
        var spacesListEl = document.getElementById('spaces-list');
        // spaces list ul
        var spacesEl = spacesListEl.querySelector('ul.list');
        // all the spaces listed
        var spaces = [].slice.call(spacesEl.querySelectorAll('.list__item > a.list__link'));

       /* var list = document.getElementsByClassName('list__link');
        var linkEl = null;

       for(var i=0; i<list.length; i++){
        
            if(list[i].innerText.indexOf(s.name, 0) !== -1 ){
                console.log("dans le if");
                console.log(list[i]);
                console.log(list[i].parentNode);

                list[i].parentNode.fireEvent('on' + 'click');
                
            }
        }*/

        console.log(spaces[0].parentNode);
        spaces[0].parentNode.click();
    };

    $scope.$on("$ionicView.enter", function() {

        callMain();
        console.log($scope.params);
        if($scope.params['salle'] != null){

            $scope.building = $scope.params['bat'];
            $scope.salle = $scope.params['salle'];

           // $scope.clickOnLink($scope.salle);
        }
        
    });
})

    .controller('MapCtrl', function ($scope, Buildings) {

        //IOS API KEY = AIzaSyC9eUt14RtODdTmpwTqMkTAn4I8c1Vn40Q

        //ANDROID API KEY = AIzaSyCluAkVx1XEk3tODxRz91xwXif5sNRFVZQ

        var latLng = new google.maps.LatLng(50.633, 3.0203);

        var mapOptions = {
            center: latLng,
            draggable: true,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,            
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

        //creation du bouton centerControl
        var centerControlDiv = document.createElement('div');
        var centerControl = new CenterControl(centerControlDiv, $scope.map);

        centerControlDiv.index = -5;
        $scope.map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);



        /**
       * The CenterControl adds a control to the map that recenters the map on
       * Chicago.
       * This constructor takes the control DIV as an argument.
       * @constructor
       */
      function CenterControl(controlDiv, map) {
        
                // Set CSS for the control border.
                var controlUI = document.createElement('div');
                controlUI.style.backgroundColor = '#fff';
                controlUI.style.border = '2px solid #fff';
                controlUI.style.borderRadius = '3px';
                controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
                controlUI.style.cursor = 'pointer';
                controlUI.style.marginBottom = '22px';
                controlUI.style.textAlign = 'center';
                controlUI.title = 'Click to recenter the map';
                controlDiv.appendChild(controlUI);
        
                // Set CSS for the control interior.
                var controlText = document.createElement('div');
                controlText.style.color = 'rgb(25,25,25)';
                controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
                controlText.style.fontSize = '16px';
                controlText.style.lineHeight = '38px';
                controlText.style.paddingLeft = '5px';
                controlText.style.paddingRight = '5px';
                controlText.innerHTML = 'Center Map';
                controlUI.appendChild(controlText);
        
                // Setup the click event listeners: simply set the map to Chicago.
                controlUI.addEventListener('click', function() {
                  map.setCenter(latLng);
                });
        
        }

        //Wait until the map is loaded
        google.maps.event.addListenerOnce($scope.map, 'idle', function () {


            // Set up handle bars
            var template = Handlebars.compile($('#marker-content-template').html());

            var closeDelayed = false;
            var closeDelayHandler = function () {
                $(info.getWrapper()).removeClass('active');
                setTimeout(function () {
                    closeDelayed = true;
                    info.close();
                }, 300);
            };

            // Add a Snazzy Info Window to the marker
            info = new SnazzyInfoWindow({
                map: $scope.map,
                position: latLng,
                wrapperClass: 'custom-window',
                offset: {
                    top: '-15px'
                },
                border: false,
                /*closeButtonMarkup: '<button type="button" class="custom-close">&#215;</button>',
                content: template({
                    title: b.title,
                    subtitle: '',
                    bgImg: b.face,
                    body: '<p>La description de mon batiment </p>'
                }),*/
                callbacks: {
                    open: function () {
                        $(this.getWrapper()).addClass('open');
                    },
                    afterOpen: function () {
                        var wrapper = $(this.getWrapper());
                        wrapper.addClass('active');
                        wrapper.find('.custom-close').on('click', closeDelayHandler);
                    },
                    beforeClose: function () {
                        if (!closeDelayed) {
                            closeDelayHandler();
                            return false;
                        }
                        return true;
                    },
                    afterClose: function () {
                        var wrapper = $(this.getWrapper());
                        wrapper.find('.custom-close').off();
                        wrapper.removeClass('open');
                        closeDelayed = false;
                    }
                }
            });


            //recuperation des batiments
            $scope.building = Buildings.all();


            for (i in $scope.building) {

                var b = $scope.building[i];

                // Construct the polygon.
                var buildingForm = new google.maps.Polygon({
                    paths: b.coord,
                    strokeColor: '#F4FA58',
                    strokeOpacity: 0.9,
                    strokeWeight: 2,
                    fillColor: '#F4FA58',
                    fillOpacity: 0.80
                });
                //set polygon on the map
                buildingForm.setMap($scope.map);

                attachInfoWindow(buildingForm, b);


            }

            //function to attach infowindow on polygon
            function attachInfoWindow(polygon, b) {

                // Set up a close delay for CSS animations
                polygon.addListener('click', function (event) {
                    info.setContent(template({
                        title: b.name,
                        bgImg: b.headerImg,
                        body: b.desc,
                        buttonUrl: b.url
                    }));
                    info.setPosition(event.latLng);
                    info.open();
                });

            }

            google.maps.event.addListener($scope.map, 'click', function (e) {
                console.log(e.latLng.toJSON());
            });

        }); //end map listener

    })

    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
