var repoApp = angular.module("repoApp", ['ngRoute']);

repoApp .config(function($routeProvider) {

    $routeProvider.when('/abmeldung', {
        templateUrl: 'templates/AbmeldungTemplate.html',
    });

    $routeProvider.when('/anmeldung', {
        templateUrl: 'templates/AnmeldungTemplate.html',
    });

    $routeProvider.when('/artedit', {
        templateUrl: 'templates/ArtEditierenTemplate.html',
    });

    $routeProvider.when('/artueber', {
        templateUrl: 'templates/ArtUebersichtTemplate.html',
    });

    $routeProvider.when('/beantragung', {
        templateUrl: 'templates/BeantragungTemplate.html',
    });

    $routeProvider.when('/benutzeredit', {
        templateUrl: 'templates/BenutzerEinzelansichtTemplate.html',
    });

    $routeProvider.when('/benutzerentf', {
        templateUrl: 'templates/BenutzerEntfernenTemplate.html',
    });

    $routeProvider.when('/benutzerhinzu', {
        templateUrl: 'templates/BenutzerHinzufügenTemplate.html',
    });

    $routeProvider.when('/benutzerueber', {
        templateUrl: 'templates/BenutzerUebersichtTemplate.html',
    });

    $routeProvider.when('/kennwort', {
        templateUrl: 'templates/KennwortVergessenTemplate.html',
    });

    $routeProvider.when('/registrierung', {
        templateUrl: 'templates/RegistrierungTemplate.html',
    });

    $routeProvider.when('/reh', {
        templateUrl: 'templates/ErklaerungTemplate.html',
    });

    $routeProvider.when('/repoedit', {
        templateUrl: 'templates/RepoEditierenTemplate.html',
    });

    $routeProvider.when('/repoueber', {
        templateUrl: 'templates/RepoUebersichtTemplate.html',
    });

    $routeProvider.when('/ueberpers', {
        templateUrl: 'templates/RepoPersUeTemplate.html',
    });

 $routeProvider.otherwise({
     redirectTo: '/anmeldung'
    });

})
