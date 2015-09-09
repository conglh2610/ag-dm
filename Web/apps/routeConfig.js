var app = angular.module("app", []);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "app.html",
        controller: "AppCtrl"
    })
        .when('/orderlookup', {
            template: "~/Views/Home/orderLookup.html" // there was a typo here in the OP
        })
});