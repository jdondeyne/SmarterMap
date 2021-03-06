// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ion-floating-menu'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.lomme2', {
    url: '/lomme2',
    views: {
      'tab-lomme2': {
        templateUrl: 'templates/tab-lomme2.html',
        controller: 'LommeCtrl'
      }
    }
  })

  .state('tab.buildings', {
      url: '/buildings',
      views: {
        'tab-buildings': {
          templateUrl: 'templates/tab-buildings.html',
          controller: 'BuildingsCtrl'
        }
      }
    })

    .state('tab.bretagne', {
      url: '/bretagne',
      params: {'bat' : null, 'salle' : null},
      views: {
        'tab-bretagne': {
          templateUrl: 'templates/tab-bretagne.html',
          controller: 'BretagneCtrl'
        }
      }
    })


    .state('tab.terraneo-a', {
      url: '/terraneo-a',
      views: {
        'tab-terraneo-a': {
          templateUrl: 'templates/tab-terraneo-a.html',
          controller: 'TerraneoaCtrl'
        }
      }
    })

    .state('tab.terraneo-b', {
      url: '/terraneo-b',
      views: {
        'tab-terraneo-b': {
          templateUrl: 'templates/tab-terraneo-b.html',
          controller: 'TerraneobCtrl'
        }
      }
    })

  .state('tab.map', {
    url: '/map',
    views: {
      'tab-map': {
        templateUrl: 'templates/tab-map.html',
        controller: 'MapCtrl'
      }
    }
  })
  
  .state('tab.search', {
    url:'/search',
    views:{
      'tab-search': {
        templateUrl: 'templates/tab-search.html',
        controller: 'SearchCtrl'
      }
    } 
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/map');

  $ionicConfigProvider.backButton.text('').icon('ion-chevron-left').previousTitleText(false);


});
