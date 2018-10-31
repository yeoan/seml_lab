var pg = require('pg');
var config = require('../config');


var QueryGetPlans = function(callback) {
    var client = new pg.Client(config.db);
    client.connect(err => {
        if (err) throw err;
        else {

            client.query('SELECT * FROM plans order by id desc;')
                .then(res => {
                    const rows = res.rows;
                    rows.map(row => {
                        console.log(row);
                    });

                    callback(rows);

                })
                .catch(err => {
                    console.log(err);
                });
        }
    });

}


var QueryGetStudents = function(callback) {
    var client = new pg.Client(config.db);
    client.connect(err => {
        if (err) throw err;
        else {

            client.query('SELECT name,degree,s_type,research_topic,status,email,graduated_num FROM students order by graduated_num desc; ')
                .then(res => {
                    const rows = res.rows;
                    rows.map(row => {
                        console.log(row);
                    });

                    callback(rows);

                })
                .catch(err => {
                    console.log(err);
                });
        }
    });

}



module.exports = {
    QueryGetPlans: QueryGetPlans,
    QueryGetStudents: QueryGetStudents
};
//module.exports = QueryGet;
