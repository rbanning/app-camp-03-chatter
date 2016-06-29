/**
 * Created by rbanning on 4/11/2016.
 */
;(function (hallpass, app, Firebase) {
    'use strict';

    app.controller('LoginCtrl', ['$location', 'identityService', function ($location, identityService) {
        var self = this;

        self.errorMessage = null;
        self.name = null;
        self.password = null;

        self.login = function () {
            if (identityService.login(self.name, self.password)) {
                $location.path('/home');    //redirect home
            } else {
                self.errorMessage = "Invalid username and/or password!";
            }

        };
    }]);

}(window.hallpass, angular.module(window.hallpass.ng.names.app), window.Firebase));


