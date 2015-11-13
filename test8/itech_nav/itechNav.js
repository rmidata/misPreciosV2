/*
 * A sample Servoy implementation of http://www.bootply.com/gkTHCwjLO9
 */

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"C16D6F00-5FDD-4E7C-8954-DC4BD5CEE8AC",variableType:4}
 */
var isDemo = 1;

/**
 * Demo items for demonstration purposes
 * 
 * @properties={typeid:35,uuid:"DF46E086-BDF0-49E0-ABD8-430EE1EC4308",variableType:-4}
 */
var demoNavItems = [
	{
		"id": "1",
		"parent_id": null,
		"title": "Top Menu",
		"formName": null
	},
	{
		"id": "2",
		"parent_id": 1,
		"title": "One",
		"formName": null
	},
	{
		"id": "3",
		"parent_id": 1,
		"title": "Two",
		"formName": null
	},
	{
		"id": "4",
		"parent_id": null,
		"title": "Side Menu",
		"formName": null
	},
	{
		"id": "5",
		"parent_id": "4",
		"title": "Three",
		"formName": null
	},
	{
		"id": "6",
		"parent_id": "4",
		"title": "Four",
		"formName": null
	},
	{
		"id": "7",
		"parent_id": "4",
		"title": "Five",
		"formName": null
	},
];


/**
 * Table that holds your navigation items. Adjust as necessary.
 * 
 * @type {JSTable<db:/servoyu/nav_items>}
 * 
 * @properties={typeid:35,uuid:"8A71FD1D-6556-46D1-8CAF-FBA4AD7DD41B",variableType:-4}
 */
var navItemTable = databaseManager.getTable('db:/servoyu/nav_items');

/**
 * Column Mapping from your table to the NavItem types.
 * 
 * {
 * 	"id": "your id column name",
 * 	"title": "your id title name"
 * }
 * 
 * @properties={typeid:35,uuid:"843523A7-D0CB-483C-9B9A-B76A139A6DBD",variableType:-4}
 */
var navItemColumns = {
	"id": "nav_item_id",
	"title": "display_name",
	"parent_id": "parent_nav_item_id",
	"formName": "form_name"
};


/**
 * Returns the nav items out of the database into JSON format
 * 
 * @properties={typeid:24,uuid:"FB27317C-8B40-4794-8C07-26074157D7B1"}
 */
function getNavItems(parentMenuId) {
	if(isDemo)
		return getNavItemsDemo(parentMenuId)
	
	var q = databaseManager.createSelect(navItemTable.getDataSource());
	q.result.add(q.columns[navItemColumns.id])
	q.result.add(q.columns[navItemColumns.title])
	q.result.add(q.columns[navItemColumns.formName])
	q.where.add(q.columns[navItemColumns.parent_id].eq(parentMenuId))
	var ds = databaseManager.getDataSetByQuery(q, 100)
	var menuItems = []
	for(var i=1; i<=ds.getMaxRowIndex(); i++){
		menuItems.push({
			"id": ds.getValue(i,1),
			"title": ds.getValue(i,2),
			"formName" : ds.getValue(1,3)
		})
	}
	return menuItems
}

/**
 * 
 * @param parentMenuId
 *
 * @properties={typeid:24,uuid:"F4B907EA-CB93-44AB-9586-23F3FC20B185"}
 */
function getNavItemsDemo(parentMenuId){
	var navItems = []
	for(var i=0; i<demoNavItems.length; i++){
		var navItem = demoNavItems[i]
		if(navItem.parent_id == parentMenuId)
			navItems.push(navItem)
	}
	return navItems
}
