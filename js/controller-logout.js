/**
 * Created by rbanning on 4/11/2016.
 */
;(function (hallpass, app, Firebase) {
    'use strict';

    app.controller('LogoutCtrl', ['$location', 'identityService', function ($location, identityService) {

        identityService.logout();
        $location.path('/login');

    }]);

}(window.hallpass, angular.module(window.hallpass.ng.names.app), window.Firebase));


