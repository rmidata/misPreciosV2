angular.module('phoneGapStatusBar', ['servoy']).factory("phoneGapStatusBar", function($services) {
		var scope = $services.getServiceScope('phoneGapStatusBar');
		return {
			overlaysWebView: function() {
				Bridge.executeMethod(overlaysWebView, null, [overlaysWebView]);

				function overlaysWebView(overlaysWebView) {
					try {
						StatusBar.overlaysWebView(overlaysWebView);
						window.alert("performed");
					} catch (e) {
						window.alert('error calling statusBar.overlaysWebView: ' + e.message);
					}
				}
			},
			hide: function() {
				Bridge.executeMethod(statusBarHide, null, []);

				function statusBarHide() {
					try {
						StatusBar.hide();
					} catch (e) {
						window.alert('error calling statusBar.hide: ' + e.message);
					}
				}
			},
			show: function() {
				Bridge.executeMethod(statusBarShow, null, []);

				function statusBarShow() {
					try {
						StatusBar.show();
					} catch (e) {
						window.alert('error calling statusBar.show: ' + e.message);
					}
				}
			},
			styleDefault: function() {
				Bridge.executeMethod(statusBarStyleDefault, null, []);

				function statusBarStyleDefault() {
					try {
						StatusBar.styleDefault();
					} catch (e) {
						window.alert('error calling statusBar.styleDefault: ' + e.message);
					}
				}
			},
			styleLightContent: function() {
				Bridge.executeMethod(statusBarStyleLightContent, null, []);

				function statusBarStyleLightContent() {
					try {
						StatusBar.styleLightContent();
					} catch (e) {
						window.alert('error calling statusBar.styleLightContent: ' + e.message);
					}
				}
			},
			styleBlackTranslucent: function() {
				Bridge.executeMethod(statusBarStyleBlackTranslucent, null, []);

				function statusBarStyleBlackTranslucent() {
					try {
						StatusBar.styleBlackTranslucent();
					} catch (e) {
						window.alert('error calling statusBar.styleBlackTranslucent: ' + e.message);
					}
				}
			},		
			styleBlackOpaque: function() {
				Bridge.executeMethod(statusBarStyleBlackOpaque, null, []);

				function statusBarStyleBlackOpaque() {
					try {
						StatusBar.styleBlackOpaque();
					} catch (e) {
						window.alert('error calling statusBar.styleBlackOpaque: ' + e.message);
					}
				}
			},	
			backgroundColorByName: function(colorName) {
				Bridge.executeMethod(statusBarBackgroundColorByName, null, [colorName]);

				function statusBarBackgroundColorByName(colorName) {
					try {
						StatusBar.backgroundColorByName(colorName);
					} catch (e) {
						window.alert('error calling statusBar.backgroundColorByName: ' + e.message);
					}
				}
			},			
			backgroundColorByHexString: function(colorHexString) {
				Bridge.executeMethod(statusBarBackgroundColorByHexString, null, [colorHexString]);

				function statusBarBackgroundColorByHexString(colorHexString) {
					try {
						StatusBar.backgroundColorByHexString(colorHexString);
					} catch (e) {
						window.alert('error calling statusBar.backgroundColorByHexString: ' + e.message);
					}
				}
			},					
			isSupported: function(callbackMethod) {
				Bridge.executeMethod(isSupported, callbackMethod);

				function isSupported() {
					try {
						return !!StatusBar;
					} catch (e) {
						return false;
					}
				}

				function callback(result) {
					alert('Is supported: ' + result);
				}
			}
		}
	}).run(function($rootScope, $services) {
})