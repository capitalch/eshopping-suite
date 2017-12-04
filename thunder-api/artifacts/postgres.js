"use strict";
var express = require('express');
var fs = require('fs');
var Q = require('q');
var router = express.Router();
var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
var util = require('util');
var def = require('./definitions');
var messages = require('./messages');
var pg = require('pg');
var format = require('pg-format');
let sql = require('./sql');
const { Pool } = require('pg');

const dbConfig = {
  user: config.user, // name of the user account
  database: config.database, // name of the database
  password: config.password,
  port: config.dbPort,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
};

const pool = new Pool(dbConfig);
router.post('/db/sql', (req, res, next) => {
  try {

    let stmt = req.body;
    let sqlString = sql[stmt.id];
    let params = stmt.params;

    pool.query(sqlString, params)
      .then(result => res.json({ data: result.rows }))
      .catch(e => setImmediate(() => { throw e }))

  } catch (error) {
    let err = new def.NError(500, messages.errInternalServerError, error.message);
    next(err);
  }
})

router.post('/db/sql/products', (req, res, next) => {
  try {
    let ret = {};
    let stmt = req.body;
    let sqlString = sql[stmt.id];
    let params = stmt.params;

    let promises = params.map(x => {
      let promise = pool.query(sqlString, [x]);
      return (promise);
    });

    Q.allSettled(promises)
    .then(items => {
      let result = items.map((x,i) => {
        let obj = {cat_id:params[i], products:x.value.rows};
        return(obj)
      });
      res.json(result);
    });

    // Q.all(promises)
    //   .then(values => {
    //     let result = values.map((x,i) => {
    //       let obj = {id:params[i], value:x.rows};
    //       return(obj)
    //     });
    //     res.json(result);
    //   });
    // res.json({ data: result });
    // params.forEach(x => {
    //   pool.query(sqlString, [x])
    //     .then(result => {
    //       ret[x] = result.rows;
    //       res.json({ data: ret });
    //     }).catch(e => {
    //       ret[x] = e;
    //       res.json({ data: ret });
    //     }
    //     )
    // });

  } catch (error) {
    let err = new def.NError(500, messages.errInternalServerError, error.message);
    next(err);
  }
})

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
      var query = format(sql.mock);
      myClient.query(query, function (err, result) {
        if (err) {
          console.log(err);
          res.json({ error: err.message })
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