"use strict";
var express = require('express');
var fs = require('fs');
var router = express.Router();
var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
var util = require('util');
var def = require('./definitions');
var messages = require('./messages');
var pg = require('pg');
var format = require('pg-format');
let sql = require('./sql');

router.get('/db/test', (req, res, next) => {
  try {
    var config = {
      user: 'postgres', // name of the user account
      database: 'ecomm', // name of the database
      password: 'su$hant123',
      port: 5433,
      max: 10, // max number of clients in the pool
      idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
    }
    var pool = new pg.Pool(config)
    var myClient;
    pool.connect(function (err, client, done) {
      if (err) console.log(err)
      myClient = client;
      var query = format(sql.emp1);
      myClient.query(query, function (err, result) {
        if (err) {
          console.log(err);
          res.json({error:err.message})
        } else {
          console.log(result.rows);
          res.json(result.rows);
        }
      })
    })
  } catch (error) {
    let err = new def.NError(500, messages.errInternalServerError, error.message);
    next(err);
  }
});

module.exports = router;