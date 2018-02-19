// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

// 'starter.controllers' is found in controllers.js
var db = null; 
var URILINK = 'http://localhost/webapi/index.php';
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers'])
.run(function($rootScope, $ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
 var db = $rootScope.db = $cordovaSQLite.openDB({ name: "my.db", location: 1});

        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS customers (id integer primary key, firstname text, lastname text)");
  

    


            //$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS client (id integer primary key, firstname text, phone int(10), email text, address text, item text)");
             //$cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS measureTable (id integer foreign key, bust int, high int, inseam int, neck int, sleeve int, waist int)");


  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider




    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

 .state('app.userlogin', {
    url: '/userlogin',
    params: {
    finalurilink: URILINK
    },

    views: {
      'menuContent': {
    templateUrl: 'templates/userlogin.html',
    controller: 'LoginCtrl'
      }
    }
  
  })



    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

 .state('lessons', {
    url: '/lessons',
    abstract: true,
    templateUrl: 'templates/lessons.html'
  })

 .state('lessonss', {
    url: '/lessonss',
    abstract: true,
    templateUrl: 'templates/lessonss.html'
  })

 .state('lessonsss', {
    url: '/lessonsss',
    abstract: true,
    templateUrl: 'templates/lessonsss.html'
  })




.state('app.kaba', {
      url: '/kaba',
      views: {
        'menuContent': {
          templateUrl: 'templates/kaba_slit.html',
          controller: 'detailsCtrl'
        }
      }
    })

.state('app.measuringtips', {
      url: '/measuringtips',
      views: {
        'menuContent': {
          templateUrl: 'templates/measuringtips.html',
          controller: 'measurementCtrl'
        }
      }
    })


.state('app.trousers', {
      url: '/trousers',
      views: {
        'menuContent': {
          templateUrl: 'templates/trousers.html',
          controller: 'detailsCtrl'
        }
      }
    })

.state('app.tab', {
    url: '/tab',
    views: {
      'menuContent': {
        templateUrl: 'templates/tabs.html'
      }
    }
  })



  .state('app.gallery-male', {
    url: '/gallery-male',
    views: {
      'menuContent': {
        templateUrl: 'templates/gallery-male.html',
        controller: 'galleryCtrl'
      }
    }
  })

  .state('app.gallery-female', {
    url: '/gallery-female',
    views: {
      'menuContent': {
        templateUrl: 'templates/gallery-female.html',
        controller: 'galleryCtrl'
      }
    }
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })


  .state('app.connect', {
    url: '/connect',
    views: {
      'menuContent': {
        templateUrl: 'templates/connect.html',
        controller: 'connectCtrl'
      }
    }
  })

  .state('app.shirt', {
    url: '/shirt',
    views: {
      'menuContent': {
        templateUrl: 'templates/shirt.html',
        controller: 'detailsCtrl'
      }
    }
  })

  .state('app.overall', {
    url: '/overall',
    views: {
      'menuContent': {
        templateUrl: 'templates/overall.html',
        controller: 'detailsCtrl'
      }
    }
  })

  .state('app.shorts', {
    url: '/shorts',
    views: {
      'menuContent': {
        templateUrl: 'templates/shorts.html',
        controller: 'detailsCtrl'
      }
    }
  })

  .state('app.calendar', {
    url: '/calendar',
    views: {
      'menuContent': {
        templateUrl: 'templates/calendar.html',
        controller: 'calendarCtrl'
      }
    }
  })

.state('app.homeCalendar', {
    url: '/home-calendar',
    views: {
      'menuContent': {
        templateUrl: 'templates/homeCalendar.html',
        controller: 'calendarCtrl'
      }
    }
  })


  .state('tab.new', {
    url: '/new',
    views: {
      'New Customer': {
        templateUrl: 'templates/new.html'
      }
    }
  })


  .state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html'
        }
      }
    })

  .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })


  .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html'
        }
      }
    })



.state('app.search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'templates/search.html',
          controller: 'detailsCtrl'
        }
      }
    })


.state('app.customers', {
      url: '/customers',
      views: {
        'menuContent': {
          templateUrl: 'templates/customers.html',
          controller: 'detailsCtrl'
        }
      }
    })

.state('app.homeCustomers', {
      url: '/home-customers',
      views: {
        'menuContent': {
          templateUrl: 'templates/homeCustomers.html',
          controller: 'detailsCtrl'
        }
      }
    })

.state('app.details', {
      url: '/details/:aId',
      views: {
        'menuContent': {
          templateUrl: 'templates/details.html',
          controller: 'detailsCtrl'
        }
      }
    })


.state('app.new', {
      url: '/new',
      views: {
        'menuContent': {
          templateUrl: 'templates/new.html',
          controller: 'detailsCtrl'
        }
      }
    })

  

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/userlogin');
});
