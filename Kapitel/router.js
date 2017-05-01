var controller = require('./controller.js');

module.exports = function(app) {
	app.get('/student', controller.test);
    //app.get('/student', controller.fetchAll);
    // app.post('/student', controller.create);
    // app.get('/student/:id', controller.fetch);
    // app.put('/student/:id', controller.update);
    // app.delete('/student/:id', controller.remove);
};