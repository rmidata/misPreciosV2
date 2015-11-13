angular.module('phoneGapPushNotification', ['servoy']).factory("phoneGapPushNotification", function($services) {
		var scope = $services.getServiceScope('phoneGapPushNotification');
		return {
			init: function(registrationCallback, notificationCallback, options, errorCallback) {
				Bridge.executeMethod(initPushNotification, null, [registrationCallback, notificationCallback, options, errorCallback]);

				function initPushNotification(registrationCallback, notificationCallback, options, errorCallback) {
					try {
						NgPush.setRegistrationCallBackMethod(registrationCallback);
						NgPush.setNotificationCallBackMethod(notificationCallback);						
//						var push = PushNotification.init(options);
//						push.on('registration', function(data) {
//							if (data && data.registrationId) {
//								registrationCallback.apply(this, [data.registrationId])
//							}
//						});
//						push.on('notification', function(data) {
//							if (data && data.registrationId) {
//								notificationCallback.apply(this, [data])
//							}
//						});
//						push.on('error', function(data) {
//							errorCallback.apply(this, e.message);
//						});
					} catch (e) {
						window.alert('error initializing push: ' + e.message);
					}
				}
			}
		}
	}).run(function($rootScope, $services) { })