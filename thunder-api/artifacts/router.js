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

router.post('/countries', (req, res, next) => {
    try {
        res.json([{
            name: "---select country---",
            value: ""
        }, {
            name: "India",
            value: "in"
        }, {
            name: "USA",
            value: "us"
        }, {
            name: "Japan",
            value: "jp"
        }, {
            name: "SriLanka",
            value: "sl"
        }]);
    } catch (error) {
        let err = new def.NError(500, messages.errInternalServerError, error.message);
        next(err);
    }
})

router.post('/form', (req, res, next) => {
    try {
        // res.json({email1:true});
        console.log(req.body);
        res.json(req.body);
    } catch (error) {
        let err = new def.NError(500, messages.errInternalServerError, error.message);
        next(err);
    }
})

router.post('/email', (req, res, next) => {
    try {
        // res.json({email1:true});
        res.json(null);
    } catch (error) {
        let err = new def.NError(500, messages.errInternalServerError, error.message);
        next(err);
    }
})

router.post('/group', (req, res, next) => {
    try {
        // res.json({email1:true});
        res.json({groupAsyncValidator1:true});
    } catch (error) {
        let err = new def.NError(500, messages.errInternalServerError, error.message);
        next(err);
    }
})
module.exports = router;