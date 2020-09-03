const {Pool} = require('pg');

const userTable = require('./userModel.js');

const userTable = require('/userModel.js');

const { PG_URI } = process.env

const pool = new Pool ({
  connectionString: PG_URI,
})

pool.on('connect', () => {
  console.log('Connected to the database!');
});


module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};