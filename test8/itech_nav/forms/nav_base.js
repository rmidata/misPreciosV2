/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"541C33CF-8042-423C-9078-7F0641B5E8EC"}
 */
var searchBox = null;


/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} id the menu id that was clicked
  *@param {String} title menu title
  *@param {String} formName menu form name
  *
 * @protected
 *
 * @properties={typeid:24,uuid:"4C5662B1-7062-41DE-AB65-3FFAE858F563"}
 */
function onNavItemClick(event, id, title, formName) {
	application.output("---Menu Clicked!---")
	application.output("event=" + event)
	application.output("id=" + id)
	application.output("title=" + title)
	application.output("formName=" + formName)
}

/**
 * 
 * @param event
 * @param id
 *
 * @properties={typeid:24,uuid:"042458E0-3359-49C2-A5C5-10171D48CF36"}
 */
function onNavSearch(event, id){
	application.output("---Search Performed---")
	application.output("event=" + event)
	application.output("search=" + searchBox)
}

/**
 * @properties={typeid:24,uuid:"C1EC1CEF-E0B7-4639-A91A-5AAD345F7554"}
 */
function loadNavItems(elementName, parentMenuId){
	var navItems = scopes.itechNav.getNavItems(parentMenuId)
	elements[elementName].navItems = navItems
}
