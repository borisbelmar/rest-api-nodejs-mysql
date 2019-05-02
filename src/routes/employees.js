// Requerimos Express
const express = require('express');

// Requerimos el módulo Router de express
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// Lo exportamos
module.exports = router;