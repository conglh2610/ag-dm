'use strict';

define(['app'], function (app) {

    var injectParams = ['$scope', '$modal'];

    var HomeController = function ($scope, $modal) {

        var vm = this;

        vm.open = function () {

            var modalInstance = $modal.open({
                templateUrl: '#/apps/orderLookup.html',
                controller: 'orderLookupController',
                resolve: {
                    contact: function () {
                        return $scope.contact;
                    }
                }
            });
        }

    };

    HomeController.$inject = injectParams;

    app.register.controller('HomeController', HomeController);

});