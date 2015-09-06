/**
 * testpimp app definition and configuration
 */

var app = angular.module('testpimp', [ 'ngStorage', 'ngIdle' , 'ui.bootstrap' , 'angular-confirm']);




//idle logout config
app.config(['KeepaliveProvider', 'IdleProvider', function(KeepaliveProvider, IdleProvider) {
	  IdleProvider.idle(10);  //seconds
	  IdleProvider.timeout(5*60); //seconds
//	  KeepaliveProvider.interval(10);
}]);

