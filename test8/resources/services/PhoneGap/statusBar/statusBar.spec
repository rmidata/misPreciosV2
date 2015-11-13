{
    "name": "phoneGapStatusBar",
    "displayName": "phoneGapStatusBar",
    "version": 1,
    "definition": "PhoneGap/statusBar/statusBar.js",
    "libraries": [
        {
            "name": "bridge.js",
            "version": "1.0.0",
            "url": "PhoneGap/js/bridge.js",
            "mimetype": "text/javascript"
        }
    ],
    "model": {},
    "api": {
        "overlaysWebView": {
            "parameters": [
                {
                    "name": "overlaysWebView",
                    "type": "boolean"
                }
            ]
        },
        "styleDefault": {
            "parameters": []
        },
        "styleLightContent": {
            "parameters": []
        },
        "styleBlackTranslucent": {
            "parameters": []
        },
        "styleBlackOpaque": {
            "parameters": []
        },
        "backgroundColorByName": {
             "parameters": [
                {
                    "name": "colorName",
                    "type": "string"
                }
            ]
        },
        "backgroundColorByHexString": {
            "parameters": [
                {
                    "name": "colorHexString",
                    "type": "string"
                }
            ]
        },
        "hide": {
            "parameters": []
        },
        "show": {
            "parameters": []
        },
        "isSupported": {
            "parameters": [
                {
                    "name": "callbackMethod",
                    "type": "function"
                }
            ]
        }
    }
}