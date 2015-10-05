'use strict';
angular
	.module('DelmarApp')
.config(
	[   	  '$stateProvider', '$urlRouterProvider',
      function($stateProvider,    $urlRouterProvider) {
  //
     /////////////////////////////
      // Redirects and Otherwise //
      /////////////////////////////
	// $urlRouterProvider.otherwise('/News');
      // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
	//$urlRouterProvider
	// The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
        // Here we are just setting up some convenience urls.
	
	// For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/News")
  //
  // Now set up the states
   //////////
        // Home //
        //////////
  $stateProvider
	 .state('News', {
		// Use a url of "/" to set a state as the "index".
      url: '/News',
      templateUrl: 'News.html'
    })
	.state('Admin', {
		// Use a url of "/" to set a state as the "index".
      url: '/Admin',
      templateUrl: 'Admin.html'
    })
	.state('DelCom', {
		// Use a url of "/" to set a state as the "index".
      url: '/DelCom',
      templateUrl: 'Delcom.html'
    })
	.state('DelCRM', {
		// Use a url of "/" to set a state as the "index".
      url: '/DelCRM',
      templateUrl: 'Delcrm.html'
    })
	.state('DelBI', {
		// Use a url of "/" to set a state as the "index".
      url: '/DelBI',
      templateUrl: 'Delbi.html'
    })
	.state('DelDocs', {
		// Use a url of "/" to set a state as the "index".
      url: '/DelDocs',
      templateUrl: 'Deldocs.html'
    })
	.state('Accounts', {
		// Use a url of "/" to set a state as the "index".
      url: '/Accounts',
      templateUrl: 'accounts.html'
    })
	.state('Finance', {
		// Use a url of "/" to set a state as the "index".
      url: '/Finance',
      templateUrl: 'finance.html'
    })
	.state('Brokerage', {
		// Use a url of "/" to set a state as the "index".
      url: '/Brokerage',
      templateUrl: 'Brokerage.html'
    })
	.state('Freight', {
		// Use a url of "/" to set a state as the "index".
      url: '/Freight',
      templateUrl: 'Freight.html'
    })
	.state('Sales', {
		// Use a url of "/" to set a state as the "index".
      url: '/Sales',
      templateUrl: 'Sales.html'
    })
	.state('HR', {
		// Use a url of "/" to set a state as the "index".
      url: '/HR',
      templateUrl: 'hr.html'
    })
	.state('Links', {
		// Use a url of "/" to set a state as the "index".
      url: '/Links',
      templateUrl: 'links.html'
    })
    .state('state1', {
		// Use a url of "/" to set a state as the "index".
      url: '/state1',
      templateUrl: 'state1.html'
    })
		.state('state1.list', {
		url: '/list',
		templateUrl: 'state1.list.html',
		controller: function($scope) {
			$scope.items = ["A", "List", "Of", "Items"];
		}
		})
    .state('state2', {
      url: '/state2',
      templateUrl: 'state2.html'
    })
		.state('state2.list', {
		url: '/list',
		templateUrl: 'state2.list.html',
		controller: function($scope) {
			$scope.things = ["A", "Set", "Of", "Things"];
		}
		})
}])
