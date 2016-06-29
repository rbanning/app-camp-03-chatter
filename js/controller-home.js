/**
 * Created by rbanning on 4/11/2016.
 */
;(function (hallpass, app, Firebase) {
    'use strict';

    app.controller('HomeCtrl', ['identityService', 'chatter', function (identityService, chatter) {
        var self = this;

        self.user = identityService.currentUser;
        self.isLoggedIn = identityService.isLoggedIn;

        self.chat = null;
        self.addChat = function () {

            //what is missing here?


            self.chat = null;   //reset
        };

    }]);

}(window.hallpass, angular.module(window.hallpass.ng.names.app), window.Firebase));


