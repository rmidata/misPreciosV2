angular.module('navSidebar',['servoy']).directive('navSidebar', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel',
		  handlers: "=svyHandlers",
		  api: "=svyApi",
      },
      controller: function($scope, $element, $attrs) {
    	  
    	  $scope.api.toggle = function() {
    		  $('.row-offcanvas').toggleClass('active');
    	  }
    	  
      },
      templateUrl: 'nav/sidebar/sidebar.html'
    };
  })