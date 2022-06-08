const express = require('express');
const { Server: Httperver } = require('http');

const app = express();
const httpServer = new Httperver(app);

module.exports = { app, httpServer };