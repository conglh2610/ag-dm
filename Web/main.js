require.config({
    baseUrl: '/apps'
});
require(
    [
        'app'
        , 'routeResolver'       
    ],

    function () {
        angular.bootstrap(document, ['testApp']);
    });