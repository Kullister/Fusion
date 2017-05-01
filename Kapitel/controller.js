var student = require('./model');

function test(req, res) {
    student.test().then(function success(rows) {
        res.send(rows);
    }, function failure(err) {
        res.send(err);
    })
}

// function fetchAll(req, res) {
//     student.fetchAll().then(function success(rows) {
//         res.send(rows);
//     }, function failure(err) {
//         res.send(err);
//     })
// }
// function fetch(req, res) {
//     student.fetch(req.params.id).then(function success(row) {
//         res.send(row);
//     }, function failure(err) {
//         res.send(err);
//     })
// }
// function create(req, res) {
//     var studentData = {
//         name: req.body.name,
//         vorname: req.body.vorname
//     };
//     console.log(studentData);

//     student.insert(studentData).then(function(id) {
//         res.send(JSON.stringify({id: id}));
//     });
// }
// function update(req, res) {
//     var studentData = {
//         name: req.body.name,
//         vorname: req.body.vorname
//     };

//     student.update(studentData, req.params.id).then(function() {
//         res.send(JSON.stringify(true));
//     });
// }
// function remove(req, res) {
//     student.remove(req.params.id).then(function() {
//         res.send(JSON.stringify(true));
//     });
// }


module.exports = {
    test: test
    // fetchAll: fetchAll,
    // fetch: fetch,
    // create: create,
    // update: update,
    // remove: remove
};