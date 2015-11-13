{
	"name": "phoneGapBarCode",
	"displayName": "phoneGapBarCode",
	"version": 1,
 	"definition": "PhoneGap/barCode/barCode.js",
	"libraries": [{
		"name": "bridge.js",
		"version": "1.0.0",
		"url": "PhoneGap/js/bridge.js",
		"mimetype": "text/javascript"
	}],
	"model":
	{
 	},
 	"api":
 	{
	   	"scan": 
	   	{
	    	"parameters": [{
				"name": "onSuccessCallbackMethod",
				"type": "function"
			}, {
				"name": "onErrorCallbackMethod",
				"type": "function"
			}
			]
		},
		"isSupported": {
			"parameters": [{
				"name": "callbackMethod",
				"type": "function"
			}]
		}
 	}
}