{
	"name": "phoneGapGeolocation",
	"displayName": "phoneGapGeolocation",
	"version": 1,
	"definition": "PhoneGap/geolocation/phoneGapGeolocation.js",
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
		"getCurrentPosition": 
		{
			"parameters": 
			[
				{
					"name": "onSuccessCallbackMethod",
					"type": "function"
				},

				{
					"name": "onErrorCallbackMethod",
					"type": "function",
					"optional": true
				},

				{
					"name": "options",
					"type": "object",
					"optional": true
				}
			]
		},

		"watchPosition": 
		{
			"parameters": 
			[
				{
					"name": "onWatchSetCallback",
					"type": "function"
				},

				{
					"name": "onSuccessCallbackMethod",
					"type": "function"
				},

				{
					"name": "onErrorCallbackMethod",
					"type": "function",
					"optional": true
				},

				{
					"name": "options",
					"type": "object",
					"optional": true
				}
			]
		},

		"clearWatch": 
		{
			"parameters": 
			[
				{
					"name": "watchId",
					"type": "string"
				}
			]
		},

		"isSupported": 
		{
			"parameters": 
			[
				{
					"name": "callbackMethod",
					"type": "function"
				}
			]
		}
	}
}