{
	"name": "nav-sidebar",
	"displayName": "sidebar",
	"version": 1,
	"definition": "nav/sidebar/sidebar.js",
	"libraries": [{"name":"nav-menu-style", "version":"1", "url":"nav/sidebar/nav-sidebar-style.css", "mimetype":"text/css"}],
	"model":
	{
		"navItems":  "navItem[]"
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
		"onNavItemClick" : "function"
	},
	"api":
	{
		"toggle": {}
	}
}