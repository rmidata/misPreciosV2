{
	"name": "svyToastr",
	"displayName": "Toastr notifications",
	"definition": "BAP Services/svyToastr/svyToastr.js",
	"version": 1,
	"libraries": 
	[
		{
			"name": "toastr.min.css",
			"version": "1",
			"url": "BAP Services/svyToastr/resources/toastr.min.css",
			"mimetype": "text/css"
		},

		{
			"name": "toastr.min.js",
			"version": "1",
			"url": "BAP Services/svyToastr/resources/toastr.min.js",
			"mimetype": "text/javascript"
		}
	],

	"model": 
	{
		
	},

	"api": 
	{
		"info": 
		{
			"parameters": [
				{                                                                 
					"name":"message",
					"type":"string"
				},
				{                                                                 
					"name":"title",
					"type":"string",
					"optional": true
				},
				{                                                                 
					"name":"options",
					"type":"object",
					"optional": true
				}
			]
		},

		"warning": 
		{
			"parameters": [
				{                                                                 
					"name":"message",
					"type":"string"
				}  ,
				{                                                                 
					"name":"title",
					"type":"string",
					"optional": true
				},
				{                                                                 
					"name":"options",
					"type":"object",
					"optional": true
				}           
			]
		},

		"success": 
		{
			"parameters": [
				{                                                                 
					"name":"message",
					"type":"string"
				},
				{                                                                 
					"name":"title",
					"type":"string",
					"optional": true
				},
				{                                                                 
					"name":"options",
					"type":"object",
					"optional": true
				}           
			]
		},

		"error": 
		{
			"parameters": [
				{                                                                 
					"name":"message",
					"type":"string"
				},
				{                                                                 
					"name":"title",
					"type":"string",
					"optional": true
				},
				{                                                                 
					"name":"options",
					"type":"object",
					"optional": true
				}           
			]
		},

		"clear": 
		{
			
		}
	},

	"types": 
	{
		"toastrOptions": 
		{
			"showDuration": "int",
			"hideDuration": "int",
			"positionClass": "string",
			"onclick": "string",
			"onShown": "string",
			"onHidden": "string",
			"closeButton": "boolean",
			"closeHtml": "string",
			"newestOnTop": "boolean",
			"showEasing": "string",
			"hideEasing": "string",
			"showMethod": "string",
			"hideMethod": "string"
		}
	}
}