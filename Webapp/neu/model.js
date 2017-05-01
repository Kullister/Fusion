var mysql = require('mysql');
// var express = require('express');

// app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'webTestDB'
});
connection.connect(function(error){
    if(!!error){
        //tempCont.release();
        console.log('Error');
    } else {
        console.log('Connection sucessfull, sauber!');
        //tempCont.query('SELECT * FROM Studenten', function(error, rows, fields){
        //})
    }
});

function test(){
    return new Promise(function (resolve, reject) {
        connection.query('SELECT * FROM studenten', function(err, rows,  fields){
            if (err) {
                reject(err);
            } else {
                // console.log(rows);
                resolve(rows);
            }  
        });
    });
}


//Alle Datensätze auslesen
// function fetchAll() {
//     return new Promise(function (resolve, reject) {
//         connection.query('SELECT * FROM studenten', function (err, rows) {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(rows);
//             }
//         });
//     });
// }

// app.get('/', function(req, resp){
//     connection.query("SELECT * FROM studenten", function(error, rows, fields) {
//         if(!!error) {
//             console.log('Error in the query');
//         }else {
//             console.log('Sucess\n');
//             console.log(rows[0]);

//             resp.send(rows[0]);
//         }
//     });
// })

// function fetch(id) {
//     return new Promise(function (resolve, reject) {
//         connection.query('SELECT * FROM studenten WHERE id = ?', [id], function (err, rows) {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(rows);
//             }
//         });
//     });
// }

// //Neue Datensätze anlegen 
// function insert(data) {
//     //Beispiel einen neuen Datensatz anzulegen
//     var values = {name: 'Koch', vorname: 'Anna'};
//     return new Promise(function (resolve, reject) {
//         connection.query('INSERT INTO studenten SET ?', values, function (err, result) {
//             if (err) {
//                 reject(err);
//             } else {
//                 console.log(result);
//                 resolve(result);
//             }
//         });
//     });
// }

// function update(data, id) {
//     return new Promise(function (resolve, reject) {
//         db.run('UPDATE studenten SET title = ?, year = ? WHERE id = ?', [data.title, data.year, id], function (err) {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve();
//             }
//         });
//     });
// }

// function remove(id) {
//     return new Promise(function (resolve, reject) {
//         db.run('DELETE FROM studenten WHERE id = ?', [id], function (err) {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve();
//             }
//         });
//     });
// }

module.exports = {
    test: test
    // fetchAll: fetchAll,
    // fetch: fetch,
    // insert: insert,
    // update: update,
    // remove: remove
};