angular.module('phoneGapNetworkInfo',['servoy'])
.factory("phoneGapNetworkInfo",function($services) 
{
	var scope = $services.getServiceScope('phoneGapNetworkInfo');
	return {
		getConnectionType: function(callbackMethod, propertyName) {
			Bridge.executeMethod(getNetworkInfo, callbackMethod, []);

			function getNetworkInfo() {
				try {
					var networkState = navigator.connection.type;
				    var states = {};
				    states[Connection.UNKNOWN]  = 'UNKNOWN';
				    states[Connection.ETHERNET] = 'ETHERNET';
				    states[Connection.WIFI]     = 'WIFI';
				    states[Connection.CELL_2G]  = 'CELL_2G';
				    states[Connection.CELL_3G]  = 'CELL_3G';
				    states[Connection.CELL_4G]  = 'CELL_4G';
				    states[Connection.CELL]     = 'CELL';
				    states[Connection.NONE]     = 'NONE';
					return [states[networkState]];
				} catch (e) {
					window.alert('error getting network info: ' + e.message);
				}
			}
		}
	}
})
.run(function($rootScope,$services)
{
})