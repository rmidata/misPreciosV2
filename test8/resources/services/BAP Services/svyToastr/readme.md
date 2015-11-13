
svyToastr notification service
===========================

svyToastr is a simple service implementing the toastr notifcation library:

http://codeseven.github.io/toastr/

The service offers these simple calls:

- plugins.svyToastr.info(title, message, options)
- plugins.svyToastr.warning(title, message, options)
- plugins.svyToastr.error(title, message, options)
- plugins.svyToastr.success(title, message, options)
- plugins.svyToastr.clear()

the title parameter is optional. The optional options object parameter can be used to provide

- Boolean closeButton: if true, a close button is shown
- String closeHtml: Optionally override the close button's HTML e.g. '<button><i class="icon-off"></i></button>'
- Number showDuration: the duration of the notification shown in milliseconds
- Number timeOut = the duration of the notification timeout in milliseconds
- Number hideDuration = the duration of the notification hiding in milliseconds
- String positionClass: any of "toast-top-right", "toast-bottom-right", "toast-bottom-left", "toast-top-left", "toast-top-full-width", "toast-bottom-full-width"
- Boolean newestOnTop: if true, the latest notifcation is shown on top of the others (default)
- String showEasing: Optionally override the animation easing to show or hide the toasts. Default is swing. swing and linear are built into jQuery.
- String hideEasing: Optionally override the animation easing to show or hide the toasts. Default is swing. swing and linear are built into jQuery.
- String showMethod: Use the jQuery show/hide method of your choice. These default to fadeIn/fadeOut. The methods fadeIn/fadeOut, slideDown/slideUp, and show/hide are built into jQuery.
- String hideMethod: Use the jQuery show/hide method of your choice. These default to fadeIn/fadeOut. The methods fadeIn/fadeOut, slideDown/slideUp, and show/hide are built into jQuery.