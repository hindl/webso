'use strict';

angular.module('websoApp', ['ui.bootstrap','ngResource','ngSanitize'])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'SolrCtrl'
        })
        .when('/organise', {
            templateUrl: 'views/organise.html'

        })
        .when('/search', {
            templateUrl: 'views/search.html',
            controller: 'SolrCtrl'

        })
        .when('/signin', {
            templateUrl: 'views/signin.html'


        })
        .when('/source/searchNew', {
            templateUrl: 'views/source/searchNew.html',
            controller: 'GoogleFeedCtrl'

        })
        .when('/source/list', {
            templateUrl: 'views/source/list.html',
            controller: 'SourceDataCtrl'

        })
        .when('/source/formAdd', {
            templateUrl: 'views/source/formAdd.html',

        })
      .otherwise({
        redirectTo: '/'
      });
  });





