const db = require('../models/clientModel');

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
    .catch(err => next({
      log: 'Error at db.query inside client controller.getClients',
      message: { err }
    }));
}



clientController.addClient = (req, res, next) => {
  const {
    _id,
    first_name,
    last_name,
    email,
    phone,
    start_date,
    end_date,
    skill_lvl,
    destination,
    location_id,
  } = req.body
  console.log(req.body)
  const queryParams = [_id,first_name,last_name,email,phone,start_date,end_date,skill_lvl,destination,location_id]
  const queryStr = `
  INSERT INTO client (_id,first_name,last_name,email,phone,start_date,end_date,skill_lvl,destination,location_id)
  VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
  RETURNING *
  ;`;
  db.query(queryStr,queryParams).then(data => {

    res.locals.client = data.rows;
    return next()
  }).catch(err => {
    return next( 
      {
        log: 'Error at db.query inside client controller.getClients',
        message: { err }
      }
   )})
};

clientController.deleteClient = (req, res, next) => {

};

module.exports = clientController;