{
	"name": "phoneGapDeviceInfo",
	"displayName": "phoneGapDeviceInfo",
	"version": 1,
	"definition": "PhoneGap/deviceInfo/deviceInfo.js",
	"libraries": 
	[
		
	],

	"model": 
	{
		
	},

	"api": 
	{
		"getDeviceInfo": 
		{
			"parameters": 
			[
				{
					"name": "callbackMethod",
					"type": "function"
				}
			]
		},
		"getDeviceInfoProperty": 
		{
			"parameters": 
			[
				{
					"name": "callbackMethod",
					"type": "function"
				},
				{
					"name": "propertyName",
					"type": "string"
				}
			]
		}
	}
}