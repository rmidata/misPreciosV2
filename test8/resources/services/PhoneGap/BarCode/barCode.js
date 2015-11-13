angular.module('phoneGapBarCode', ['servoy']).factory("phoneGapBarCode", function($services) {
		var scope = $services.getServiceScope('phoneGapBarCode');
		return {
			scan: function(successCallback, errorCallback, options) {
				Bridge.executeMethod(scanBarcode, null, [successCallback, errorCallback]);

				function scanBarcode(successCallback, errorCallback) {
					try {
						cordova.plugins.barcodeScanner.scan(successCallback, errorCallback);
					} catch (e) {
						window.alert('error scanning barcode: ' + e.message);
					}
				}
			},
			isSupported: function(callbackMethod) {
				Bridge.executeMethod(isSupported, callbackMethod);

				function isSupported() {
					try {
						return !!cordova.plugins.barcodeScanner;
					} catch (e) {
						return false;
					}
				}

				function callback(result) {
					alert('Is supported: ' + result);
				}
			}
		}
	}).run(function($rootScope, $services) { })