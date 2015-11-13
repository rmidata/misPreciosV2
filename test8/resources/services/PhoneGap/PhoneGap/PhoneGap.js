angular.module('PhoneGap', ['servoy']).factory("PhoneGap", function($services) {
	var scope = $services.getServiceScope('PhoneGap');
	
	return {
		executeScript: function(script, scriptArgs, callbackMethod) {
			Bridge.executeMethod(executeScript, null, [callbackMethod, script, scriptArgs]);
			
			function executeScript(script, scriptArgs) {
				var mArgs = scriptArgs;
				if (!Array.isArray(scriptArgs)) {
					mArgs = [scriptArgs]
				}
				var f = eval(script);
				return f.apply(this, mArgs);
			}
		}
	};
}).run(function($rootScope, $services) {
	var scope = $services.getServiceScope('PhoneGap');
	
	// alert($services.getServiceScope('solutionSettings').sessionExpired);
	
	Bridge.init();
	
	window.history.pushState('main', '');
	
	scope.$watch('model.onBackCallbackMethod', function(newValue, oldValue) {
		if (newValue) {
			window.onpopstate = function(event) {
				if (!event.state) {
					history.forward();
					window.executeInlineScript(newValue.formname, newValue.script);
				}
			}
			
			return
			
			Bridge.executeMethod(bindBackEvent, [newValue]);
		
			function bindBackEvent() {
				window.onhashchange = function() {
					alert('back button pushed!');
				}
			}
		}
	});
})
