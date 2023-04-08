//NOTE from the front-end: ALWAYS SEND AN ARRAY
//NOTE from the front=end: data from sql must be converted to snake case before sending to the front end

//import express and initalize express as a variable
const express = require('express');
const app = express();
// require the path package to resolve paths
const path = require('path');
// json middleware to parse all incoming requests
app.use(express.json());
//require cookie parser and initialize cookie parser as global middleware
const cookieParser = require('cookie-parser')
app.use(cookieParser());
//may *possibly* need the following global middleware if there are cors issues or errors (check front end console log)
//const cors = require('cors')

// initialize a PORT variable to store the port number
const PORT = 3000;

// require all routes(root, signup, dashboard, analytics, inquiries) //
const rootRouter = require('./routes/root');
const signupRouter = require('./routes/signup.js');
const dashboardRouter = require('./routes/dashboard');
const analyticsRouter = require('./routes/analytics');
const inquiriesRouter = require('./routes/inquiries');
// **************************************************************** //

// serve static files
app.use(express.static('dist'));

// route (/) requests to the rootrouter
app.use('/', rootRouter);

// requests to endpoint sign up 
app.use('/signup', signupRouter)

// parent component of Customer comp. makes a get request for all customer path="/dashboard
app.use('/dashboard', dashboardRouter)

//"path='analytics" get request for analytics page
app.use('/analytics', analyticsRouter)

// get request for pending request path="/inquiries"
app.use('/inquiries', inquiriesRouter)

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
app.listen(PORT, () => { 
    console.log(`listening on port ${PORT}...`)
});


module.exports = app