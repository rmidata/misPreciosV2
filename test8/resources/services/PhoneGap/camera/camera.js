/*
 * A Service method can have a Servoy Method as argument. Client-side this will result in a object containing a form and script property, which are obfuscated
 * Using the window.executeInlineScript(formname, script, params) method, the serverside method can be invoked from the client
 */
angular.module('phoneGapCamera', ['servoy']).factory("phoneGapCamera", function($window, $services) {
	var $scope = $services.getServiceScope('phoneGapCamera');
	
	return {
		getPicture: function(successCallback, errorCallback, options) {			
			Bridge.executeMethod(getPicture, null, [successCallback, errorCallback, options]);
			
			function getPicture(successCallback, errorCallback, options) {
				if (!options) { 
					options = {
						quality: 50,
						mediaType: Camera.MediaType.ALLMEDIA,
						destinationType: Camera.DestinationType.FILE_URI,
						sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
						correctOrientation: true
					}
				}
				navigator.camera.getPicture(successCallback, errorCallback, options);
			}
		},
		isSupported: function(callbackMethod) {
			// Bridge.executeMethod(isSupported, callback);
			Bridge.executeMethod(isSupported, callbackMethod);
			
			function isSupported() {
				return !!window.Notification;
			}
			
			function callback(result) {
				alert('Is supported: ' + result);
			}
		}
	}	
}).run(function($rootScope, $services, window) {
	// init method doesn't have to run as this is already handled by the PhoneGap service
	// Bridge.init();
})