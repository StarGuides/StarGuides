//NOTE:ALWAYS SEND AN ARRAY
//NOTE: Front end needs data from sql in snake case

//mport express
const express = require('express');
//initalize express
const app = express();
// initialize a PORT variable to store the port number
const PORT = 3000;
// require the path package to resolve paths
const path = require('path');
// require root route
const rootRouter = require('./routes/root');
// require dashboard route
const dashboardRouter = require('./routes/dashboard');
// require analytics route
const analyticsRouter = require('./routes/analytics');
    // // require inquiries route
    // const inquiriesRouter = require('./routes/inquiries');
// require inquiries route
const signupRouter = require('./routes/signup.js');
// require mongoose
const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://nly714:asdf1212@cluster0.0dmisie.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'clients'
  })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

// json middleware to parse all incoming requests
app.use(express.json());

// may need the following global middleware if there are cors issues
//const cors = require('cors')

// serve static files
app.use(express.static('dist'));

// route (/) requests to the rootrouter
app.use('/', rootRouter);

// request to sign up
app.use('/signup', signupRouter)

// parent component of Customer comp. makes a get request for all customer path="/dashboard
app.use('/dashboard', dashboardRouter)

//"path='analytics" get request for analytics page
app.use('/analytics', analyticsRouter)

    // // get request for pending request path="/inquiries"
    // app.use('/inquiries', inquiriesRouter)

// request from unknown end point
app.use((req, res) => res.status(400).json('the page you are trying to reach does not exist'))

// error catcher for server, routers, and middleware
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught middleware error',
        status: 400,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

// activate roouter  on designated PORT
app.listen(PORT, () => { console.log(`listening on port ${PORT}...`)})



module.exports = app