/**
 * Created by rbanning on 6/14/2016.
 */
;(function (hallpass, app, moment, Firebase) {
    'use strict';

    app.factory('chatter', ['$q', 'fbRefs', 'identityService', '$firebaseArray',
        function ($q, fbRefs, identityService, $firebaseArray) {

            var Chatter = function (user, message, created) {
                if (!created) {
                    created = new Date();
                }
                this.user = angular.merge({}, {id: user.$id}, user);
                this.message = message;
                this.created = moment(created).toISOString();
                this.timestamp = 0 - created.getTime();
            };

            var api = {
                data: null,
                initialized: false,
                errors: [],
                get identity() {
                    return identityService.currentUser;
                }
            };

            api.refresh = function () {
                var dfd = $q.defer();

                api.initialized = false;


                //get the users from firebase
                var query = fbRefs.getChatterRef().orderByChild("timestamp").limitToFirst(100);
                $firebaseArray(query)
                    .$loaded()
                    .then(function (data) {
                        api.data = data;
                        api.initialized = true;
                        console.log("chatter", api);
                        dfd.resolve(api);
                    }).catch(function (err) {
                    api.errors.push(err);
                    dfd.reject(err);
                });


                return dfd.promise;
            };

            api.add = function (message, usr) {
                if (message && message.length > 1) {
                    usr = usr || api.identity;
                    if (usr) {
                        var chat = new Chatter(usr, message);
                        api.data.$add(chat);
                        console.log("added", chat);
                    }
                } else {
                    console.warn("cannot add empty chat message", arguments);
                }
            }


            //initialize
            api.refresh();
            return api;
        }]);

}(window.hallpass, angular.module(window.hallpass.ng.names.app), window.moment, window.Firebase));

