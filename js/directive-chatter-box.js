/**
 * Created by rbanning on 6/15/2016.
 */
;(function (hallpass, app) {
    'use strict';


    app.directive('chatterBox', [
        function () {
            return {
                restrict: 'AE',
                replace: true,
                scope: {
                    user: '=',
                    chatter: '='
                },
                template: [
                    '<div class="chatter-item" ng-repeat="chat in vm.chatter.data" ng-class="{\'mine\': vm.user.$id === chat.user.id}">',
                    '   <div class="meta">',
                    '       <img ng-src="{{chat.user.photo}}" alt="{{chat.user.id}}" />',
                    '       <span class="name">{{chat.user.name}}</span>',
                    '       <span class="flex"></span>',
                    '       <span class="created">{{chat.created | ago}}</span>',
                    '   </div>',
                    '   <div class="message">{{chat.message}}</div>',
                    '</div>'
                ].join(""),
                controller: ['$scope', function ($scope) {
                    var self = this;

                    self.user = $scope.user;
                    self.chatter = $scope.chatter;

                    console.log("chatter-box", self);
                }],
                controllerAs: 'vm'
            };
        }
    ]);

}(window.hallpass, angular.module(window.hallpass.ng.names.common)));


