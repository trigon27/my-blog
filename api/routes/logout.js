const express = require('express');
const logoutRoutes = express.Router();
const jwt = require('jsonwebtoken');

logoutRoutes.post('/logout', (req, res) => {
  // Clear the token cookie without attempting to verify it
  res.clearCookie('token').json('ok');
});

module.exports = logoutRoutes;
