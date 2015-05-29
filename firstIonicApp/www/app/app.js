angular.module("eliteApp", ["ionic", 'chart.js'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}).controller("DoughnutCtrl", function ($scope,$ionicLoading) {
        $scope.labels = ["demo chart data", "In-Store Sales", "Mail-Order Sales"];
        $scope.data = [300, 500, 100];
        $scope.legend;
        $scope.onClick = function (evt) {
            console.log(evt[0].label);

          $ionicLoading.show({ template: evt[0].label, noBackdrop: true, duration: 2000 });
        };
      var functionToBeCalled= function(evt){
        console.log(evt);
        console.log(evt.srcElement.innerText);
        $ionicLoading.show({ template: evt.srcElement.innerText, noBackdrop: true, duration: 2000 });
      };
      ionic.DomUtil.ready(function(){
        var legendElement=document.querySelector('.doughnut-legend');
        angular.element(legendElement).on('click', functionToBeCalled);
        console.log(legendElement);

      });

    })
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
      abstract: true,
      url: "/home",
      templateUrl: "app/home/home.html"
    })

    .state('home.leagues', {
      url: "/leagues",
      views: {
        "tab-leagues": {
          templateUrl: "app/home/leagues.html"
        }
      }
    })

    .state('home.myteams', {
      url: "/myteams",
      views: {
        "tab-myteams": {
          controller:"DoughnutCtrl",
          templateUrl: "app/home/myteams.html"
        }
      }
    })

    .state('app', {
      abstract: true,
      url: "/app",
      templateUrl: "app/layout/menu-layout.html"
    })

    .state('app.teams', {
      url: "/teams",
      views: {
        'mainContent': {
          templateUrl: "app/teams/teams.html"
        }
      }
    })

    .state('app.team-detail', {
      url: "/teams/:id",
      views: {
        'mainContent': {
          templateUrl: "app/teams/team-detail.html"
        }
      }
    })

    .state('app.game', {
      url: "/game/:id",
      views: {
        'mainContent': {
          templateUrl: "app/game/game.html"
        }
      }
    })

    .state('app.standings', {
      url: "/standings",
      views: {
        'mainContent': {
          templateUrl: "app/standings/standings.html"
        }
      }
    })

    .state('app.locations', {
      url: "/locations",
      views: {
        'mainContent': {
          templateUrl: "app/locations/locations.html"
        }
      }
    })

    .state('app.rules', {
      url: "/rules",
      views: {
        'mainContent': {
          templateUrl: "app/rules/rules.html",
        }
      }
    })
      .state('test', {
        abstract: true,
        url: "/test",
        templateUrl: "app/layout/menu-layout.html"
      })

      .state('test.kostas',{
        url:"/test",
        views:{
          'mainContent':{
            templateUrl:"app/rules/rules.html"
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home/leagues');
});

