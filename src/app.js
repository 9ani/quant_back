const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');

const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/api', authRoutes);
app.use('/api', profileRoutes);

module.exports = app;