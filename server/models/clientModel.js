// ELEPHANGSQL URL : postgres://xrfttppu:XhS3W_Y1Sn9AKePacy6cqDoPiEv6hlFB@raja.db.elephantsql.com/xrfttppu

const { Pool } = require('pg');

const PGURI = 'postgres://xrfttppu:XhS3W_Y1Sn9AKePacy6cqDoPiEv6hlFB@raja.db.elephantsql.com/xrfttppu';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PGURI
});

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};



/* TERMINAL COMMANDS FOR CREATING TABLES

CLIENT TABLE: 
CREATE TABLE client (
  _id               char(10) CONSTRAINT uniq UNIQUE,
  first_name        varchar NOT NULL,
  last_name         varchar NOT NULL,
  email             varchar NOT NULL,
  phone             integer NOT NULL,
  start_date        date,
  end_date          date,
  skill_lvl         integer NOT NULL,
  destination       varchar NOT NULL,
  location_id       integer
);
 => INSERT INTO client
 -> VALUES(0000000001, 'Alex', 'Honnold', 'email@email.com', 1234567890, 28, 07/01/2023, 07/07/2023, 2, 26a);


LOCATION TABLE:
CREATE TABLE location (
  _id     integer,
  state   varchar
);
=> INSERT INTO location (_id, state)
VALUES (1, Alabama),
(2, Alaska);


DESTINATION TABLE:
CREATE TABLE destination (
  _id     integer,
  park    char,
  state   varchar
);

*/
