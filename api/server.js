const express = require('express');

const users = require('../users/usersModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: "It's alive!" });
  // res.status(200).send('hello'); // we used this to send a string to test JSON
});

server.get('/users', async (req, res) => {
  const rows = await users.getAll();

  res.status(200).json(rows);
});

module.exports = server;