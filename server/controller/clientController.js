const db = require('../models/clientModels');

const clientController = {};

// get all client data
  // joining location id with the state client is from
  // joining destination id with the client's travel destination
clientController.getClients = (req, res, next) => {
  const queryStr = `
  SELECT
    client.*,
    destination.park AS park,
    location.state AS state
  
  FROM client
    LEFT JOIN location ON client.location_id = location._id
    LEFT JOIN destination ON client.destination = destination._id;
  `;

  db.query(queryStr)
    .then((data) => {
      res.locals.clients = data.rows;
      return next();
    })
    .catch(err => next(err));
}

// CREATE TABLE client (
//   _id               char(10) CONSTRAINT uniq UNIQUE,
//   first_name        varchar NOT NULL,
//   last_name         varchar NOT NULL,
//   email             varchar NOT NULL,
//   phone             integer NOT NULL,
//   start_date        date,
//   end_date          date,
//   skill_lvl         integer NOT NULL,
//   destination       varchar NOT NULL,
//   location_id       integer,
// );


clientController.addClient = (req, res, next) => {
  const {
    first_name,
    last_name,
    email,
    phone,
    location,
    start_date,
    end_date,
    skill_lvl,
    destination,
    location_id
  } = req.body
  const queryParams = [first_name,last_name,email,phone,location,start_date,end_date,skill_lvl,destination,location_id]
  const queryStr = `
  INSERT INTO client (first_name,last_name,email,phone,location,start_date,end_date,skill_lvl,destination,location_id)
  VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
  RETURNING*
  ;`;
  db.query(queryStr,queryParams).then(data => {
    res.locals.character = row[0];
    return next()
  }).catch(err => {return next(err)})
};

clientController.deleteClient = (req, res, next) => {

};