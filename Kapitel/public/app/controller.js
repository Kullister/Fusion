angular.module('webTestDB')
    .controller('ListController', ListController)
    .controller('FormController', FormController)
    .controller('DeleteController', DeleteController);

ListController.$inject = ['dataFactory'];
function ListController (dataFactory) {
    this.studenten = dataFactory.getAll();
}

FormController.$inject = ['$state', '$stateParams', 'dataFactory'];
function FormController ($state, $stateParams, dataFactory) {
    this.name =  '';
    this.vorname = '';

    if($stateParams.id) {
        dataFactory.read({id: $stateParams.id}).$promise.then(function(student) {
            this.name = student.name;
            this.vorname = student.vorname;
        }.bind(this));
    }

    this.save = function () {
        var data = {
            name: this.name,
            vorname: this.vorname
        };
        if ($stateParams.id) {
            data.id = $stateParams.id;
            dataFactory.update(data).$promise.then($state.go.bind($state, 'list'));
        } else {
            dataFactory.create(data).$promise.then($state.go.bind($state, 'list'));
        }
    }.bind(this);
}

DeleteController.$inject = ['$state', '$stateParams', 'dataFactory'];
function DeleteController ($state, $stateParams, dataFactory) {
    dataFactory.delete({id: $stateParams.id}).$promise.then(function() {
        $state.go('list');
    });
}

