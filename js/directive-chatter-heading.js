/**
 * Created by rbanning on 6/29/2016.
 */
;(function (hallpass, app) {
    'use strict';


    app.directive('chatterHeading', [
        function () {
            return {
                restrict: 'AE',
                replace: true,
                transclude: true,
                scope: {
                    chat: '=',
                    addChat: '&',
                    color: '@'
                },
                template: [
                    '<div class="chatter-heading">',
                    '   <h3>Chatter</h3>',
                    '   <span class="flex"></span>',
                    '   <input type="text" placeholder="say something!" ng-model="chat" when-enter-key="addChat()">',
                    '   <button-wave color="{{color}}" ng-click="addChat()" icon="add"></button-wave>',
                    '   <div ng-transclude></div>',
                    '</div>'
                ].join(""),
                controller: ['$scope', function ($scope) {
                    if (angular.isUndefined($scope.color)) {
                        $scope.color = "pink";
                    }
                }]
            };
        }
    ]);

}(window.hallpass, angular.module(window.hallpass.ng.names.common)));