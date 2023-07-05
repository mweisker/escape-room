
const { Pool } = require('pg');

const PG_URI = process.env.DB_URI;

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
}


/*

CREATE TABLE Users (
  UserId SERIAL PRIMARY KEY,
  UserName varchar NOT NULL,
  Password varchar NOT NULL
);

CREATE TABLE Tasks (
  TaskId SERIAL PRIMARY KEY,
  Title varchar,
  Description varchar,
  Status varchar DEFAULT 'in progress',
  DueDate DATE,
  UserId int,
  FOREIGN KEY (UserId) REFERENCES Users(UserId)
);

*/