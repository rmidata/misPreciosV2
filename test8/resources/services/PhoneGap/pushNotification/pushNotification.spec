{
	"name": "phoneGapPushNotification",
	"displayName": "phoneGapPushNotification",
	"version": 1,
	"definition": "PhoneGap/pushNotification/pushNotification.js",
	"libraries": 
	[
		{
			"name": "bridge.js",
			"version": "1.0.0",
			"url": "PhoneGap/js/bridge.js",
			"mimetype": "text/javascript"
		}
	],

	"model": 
	{
		
	},

	"api": 
	{
		"init": 
		{
			"parameters": 
			[
				{
					"name": "registrationCallback",
					"type": "function"
				},

				{
					"name": "notificationCallback",
					"type": "function"
				},

				{
					"name": "options",
					"type": "object"
				},

				{
					"name": "errorCallback",
					"type": "function",
					"optional": true
				}
			]
		}
	}
}