{
	"name": "phoneGapCamera",
	"displayName": "phoneGapCamera",
	"definition": "PhoneGap/camera/camera.js",
	"libraries": [{
		"name": "bridge.js",
		"version": "1.0.0",
		"url": "PhoneGap/js/bridge.js",
		"mimetype": "text/javascript"
	}],
	"version": 1,
	"model": {},
	"handlers": {},
	"api": {
		"getPicture": {
			"parameters": [{
				"name": "onSuccessCallbackMethod",
				"type": "function"
			}, {
				"name": "onErrorCallbackMethod",
				"type": "function"
			}, {
				"name": "options",
				"type": "object",
				"optional": true
			}],
			"returns": "boolean"
			
		},
		"isSupported": {
			"parameters": [{
				"name": "callbackMethod",
				"type": "function"
			}],
			"returns": "boolean"
		}
	}
}