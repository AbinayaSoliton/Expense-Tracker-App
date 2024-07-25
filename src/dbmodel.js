const Pool = require('pg').pool;
const pool = new Pool({
    user: 'sample',
    host: 'localhost',
    database: 'sample',
    password: 'sample',
    port: 5432
})

const getExpense = async () => {
    return await new Promise(function (resolve, reject) {
        pool.query("select * from expense", (error, results) => {
            if (error) {
                reject(error);
            }
            if (results && results.rows) {
                resolve(results.rows); 
            } else {
                reject (new Error('no results found'));
            }
        })
    })
}

module.exports = {
    getExpense
}