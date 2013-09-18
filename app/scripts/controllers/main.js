'use strict';

angular.module('websoApp')
    .controller('SolrCtrl', function ($scope,$resource) {

        $scope.solr = $resource('http://albator.hesge.ch\\:8587/solr/collection1/:action',
            {action:'select', q:'pantene', wt:'json' , 'json.wrf':"JSON_CALLBACK"},
            {get:{method:'JSONP'}});


        $scope.doSearch = function () {
            if ($scope.searchTerm) {
                $scope.solrResult = $scope.solr.get({q:$scope.searchTerm});
                }
            };
    });


// http://albator.hesge.ch:8587/solr/collection1/select?q='+query+'&wt=json&json.wrf=?&callback=?'

angular.module('websoApp')
    .controller('GoogleFeedCtrl', function ($scope,$resource) {


        $scope.googleFeed = $resource('https://ajax.googleapis.com/ajax/services/feed/:action',
            {action:'find', v:'1.0',q:'technology', callback:"JSON_CALLBACK"},
            {get:{method:'JSONP'}});


        $scope.doSearch = function () {
                if ($scope.searchTerm) {
                    $scope.googleFeedResult = $scope.googleFeed.get({q:$scope.searchTerm});
                }
        };
    });

//https://ajax.googleapis.com/ajax/services/feed/find?v=1.0&q=Official%20Google%20Blog&userip=INSERT-USER-IP"


angular.module('websoApp')
    .controller('SourceDataCtrl', function ($scope,$resource) {

/*
        $scope.sourceData = $resource('http://albator.hesge.ch/cgi-bin/webso/sources/:action',
            {action:'get.json', source_user:'user_1',callback:"JSON_CALLBACK"},
            {get:{method:'JSONP'}});
*/
        $scope.sourceData = $resource('http://albator.hesge.ch/cgi-bin/webso/sources/:action',
            {action:'get.json', source_user:'user_1',callback:"JSON_CALLBACK"},
            {get:{method:'JSONP'}});

        $scope.doSearch = function () {
            $scope.sourceResult = $scope.sourceData.get();
        };

        $scope.doSearch();
    });

//http://albator.hesge.ch/cgi-bin/webso/sources/get.json?&source_user=user_1