"use strict";
var express = require('express');
var fs = require('fs');
// var http = require('http');
var router = express.Router();
var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
var util = require('util');
var def = require('./definitions');
var messages = require('./messages');

router.get('/api/test', (req, res, next) => {
    try {
        res.json({
            'status': 'ok'
        });
    } catch (error) {
        let err = new def.NError(500, messages.errInternalServerError, error.message);
        next(err);
    }
});

router.post('/test', (req, res, next) => {
    try {
        // res.json({
        //     "statusCode": 400,
        //     "error": "Bad Request",
        //     "message": "Email address already registerd"
        // });
        res.json(null);
    } catch (error) {
        let err = new def.NError(500, messages.errInternalServerError, error.message);
        next(err);
    }
})

module.exports = router;