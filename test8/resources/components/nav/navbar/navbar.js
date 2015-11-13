angular.module('navNavbar',['servoy']).directive('navNavbar', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel',
		  handlers: "=svyHandlers",
		  api: "=svyApi",
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'nav/navbar/navbar.html'
    };
  })