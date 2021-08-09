
const express = require('express');
const { signup, signin } = require('../controllers/user.controller');
const { validateSignupRequest, isRequestValidates, validateSigninRequest } = require('../validators/auth.validates');

const route = express.Router();

 route.post('/signup', validateSignupRequest, isRequestValidates, signup);
 route.post('/signin', validateSigninRequest, isRequestValidates, signin);

// middleWare 



module.exports = route;