const createTable = `CREATE TABLE IF NOT EXIST Users(
  id SERIAL PRIMARY KEY,
  email VARCHAR(200) UNIQUE NOT NULL,
  password VARCHAR NOT NULL,
  username VARCHAR NOT NULL
)`;

module.exports = createTable;