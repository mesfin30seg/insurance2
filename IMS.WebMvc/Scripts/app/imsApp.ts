var imsApp = angular.module("imsApp", ['ngResource', 'datetime'])
    .config(function ($sceProvider) {
        $sceProvider.enabled(false);
    });

