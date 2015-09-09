
define(['app'], function () {
    var app = angular.module('testApp', ['ngRoute', 'ngAnimate', 'routeResolverServices', 'ui.bootstrap']);

    app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider',
                    '$compileProvider', '$filterProvider', '$provide', '$httpProvider',

            function ($routeProvider, routeResolverProvider, $controllerProvider,
                      $compileProvider, $filterProvider, $provide, $httpProvider) {


                app.register =
                {
                    controller: $controllerProvider.register,
                    directive: $compileProvider.directive,
                    filter: $filterProvider.register,
                    factory: $provide.factory,
                    service: $provide.service
                };

                //Define routes - controllers will be loaded dynamically
                var route = routeResolverProvider.route;

                $routeProvider
                    .when('/home', route.resolve('Home', 'home/', 'vm'))                   
                    .otherwise({ redirectTo: '/home' });

            }]);

    app.run(['$rootScope', '$location', 
        function ($rootScope, $location) {

            //Client-side security. Server-side framework MUST add it's 
            //own security as well since client-based security is easily hacked
            $rootScope.$on("$routeChangeStart", function (event, next, current) {
                if (next && next.$$route && next.$$route.secure) {

                }
            });

            $rootScope.loadPage = function (href) {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.open("GET", href, false);
                xmlhttp.send();
                return xmlhttp.responseText;
            };

            $rootScope.processError = function (error) {
                alert(error.Message);
            }

        }]);

    return app;

});
