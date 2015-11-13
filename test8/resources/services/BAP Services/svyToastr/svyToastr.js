/*
 * A Service method can have a Servoy Method as argument. Client-side this will result in a object containing a form and script property, which are obfuscated
 * Using the window.executeInlineScript(formname, script, params) method, the serverside method can be invoked from the client
 */
angular.module('svyToastr', ['servoy']).factory("svyToastr", function($window, $services) {
		var defaultOptions = {
			"closeButton": false,
			"debug": false,
			"newestOnTop": false,
			"progressBar": false,
			"positionClass": "toast-top-right",
			"preventDuplicates": false,
			"onclick": null,
			"showDuration": "300",
			"hideDuration": "1000",
			"timeOut": "5000",
			"extendedTimeOut": "1000",
			"showEasing": "swing",
			"hideEasing": "linear",
			"showMethod": "fadeIn",
			"hideMethod": "fadeOut"
		}
		function show(type, message, title, options) {
			if (options) {
				for ( var i in options ) {
					defaultOptions[i] = options[i];
				}
				toastr.options = defaultOptions;
			}
			if (title) {
				toastr[type](title, message);
			} else {
				toastr[type](message);
			}
		}
		return {
			info: function(message, title, options) {
				show("info", message, title, options)
			},
			warning: function(message, title, options) {
				show("warning", message, title, options)
			},
			error: function(message, title, options) {
				show("error", message, title, options)
			},
			success: function(message, title, options) {
				show("success", message, title, options)
			},
			clear: function() {
				toastr.clear();
			}

		}
	}).run(function($rootScope, $services, window) { }
)