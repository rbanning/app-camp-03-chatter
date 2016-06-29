/**
 * Created by rbanning on 6/14/2016.
 */
;(function (hallpass, app, Firebase) {
    'use strict';

    app.factory('fbRefs', ['firebaseRootRef', 'identityService', function (firebaseRootRef, identityService) {
        return {
            getChatterRef: function () {
                return firebaseRootRef.child('chatter');
            }
        };
    }]);

}(window.hallpass, angular.module(window.hallpass.ng.names.app), window.Firebase));

