/**
 * Created by rbanning on 4/10/2016.
 */
;(function (window, hallpass) {
    'use strict';

    window.app = angular.module(hallpass.ng.names.app, [hallpass.ng.names.common, 'ui.router', 'firebase']);


    //SETUP VIEWS (ROUTES)
    window.app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                controller: 'HomeCtrl',
                controllerAs: 'vm',
                templateUrl: 'home.html'
            })
            .state('login', {
                url: '/login',
                controller: 'LoginCtrl',
                controllerAs: 'vm',
                templateUrl: 'login.html'
            })
            .state('logout', {
                url: '/logout',
                controller: 'LogoutCtrl',
                template: "<div>logout</div>"
            });

    });

}(window, window.hallpass));