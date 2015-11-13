{
	"name": "nav-navbar",
	"displayName": "navbar",
	"version": 1,
	"definition": "nav/navbar/navbar.js",
	"libraries": [{"name":"nav-menu-style", "version":"1", "url":"nav/navbar/nav-navbar-style.css", "mimetype":"text/css"}],
	"model":
	{
		"navItems":  "navItem[]",
		"navTitle" : {"type": "string", "default":""},
		"showSearch": {"type": "boolean", "default":true},
		"placeholderText" : {"type": "string", "default":"Search..."},
		"searchDataProviderID" : { "type":"dataprovider", "pushToServer": "allow","tags": { "scope" :"design" }, "ondatachange": { "onchange":"onDataChangeMethodID", "callback":"onDataChangeCallback"}}
	},
	"types": 
	{
		"navItem": 
		{
			"id":"string",
			"title":"string",
			"formName":"string"
		}
	},
	"handlers":
	{
	        "onNavItemClick" : "function",
	        "onSearch" : "function"
	}
}