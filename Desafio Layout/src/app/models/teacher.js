const { encontrarIdade, encontrarData } = require("../../lib/utils");
const db = require("../../config/db");

module.exports = {
    all(callback) {

        db.query(`SELECT * FROM teachers ORDER BY name ASC`, function(err, results){
            if (err) throw `Database Error! ${err}`;

            callback(results.rows);
        });
    }
}