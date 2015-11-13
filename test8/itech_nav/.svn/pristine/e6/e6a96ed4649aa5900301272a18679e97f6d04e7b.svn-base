
/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"2663627F-2C58-4430-8741-C57FF3B3E860"}
 */
function onLoad(event) {
	loadNavItems("navbar", 1)
	loadNavItems("sidebar", 4)
}

/**
 *
 * @param {JSEvent} event
 * @param {Number} id
 * @param {String} title menu title
  *@param {String} formName menu form name
 *
 * @properties={typeid:24,uuid:"6624B612-5F8E-4573-9CBE-EA7D8E655C87"}
 */
function onNavItemClick(event, id, title, formName) {
	if(!formName)
		formName = "nav_home" //dummy example form
	
	//Current Bootstrap tab has different API type
	var tab =  {
  	 	"active": {"type":"boolean","default": false,"tags": { "scope" :"private" }},
  		"containedForm": formName,
  		"text": {"type":"tagstring","default":"tab"},
  		"relationName": ""
  	}
	var tabs = [tab]
	elements.tabpanel.tabs = tabs
	return _super.onNavItemClick(event, id, title, formName)
}

/**
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"386DF2BA-F2E1-4BE5-8C21-32B1E885DF68"}
 */
function toggleSidebar(event) {
	elements.sidebar.toggle()
}
