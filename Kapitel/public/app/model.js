angular.module('webTestDB')
.factory('dataFactory', dataFactory);

dataFactory.$inject = ['$resource'];

function dataFactory($resource) {
    return $resource(
        '/student/:id',
        {id: '@id'},
        {
            getAll: {method: 'GET', isArray: true},
            create: {method: 'POST'},
            read: {method: 'GET'},
            update: {method: 'PUT'},
            delete: {method: 'DELETE'}
        }
    );
}