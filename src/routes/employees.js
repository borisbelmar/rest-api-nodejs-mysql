// Requerimos Express
const express = require('express');

// Requerimos el módulo Router de express
const router = express.Router();

const mysqlConnection = require('../database');

// API REST para consultar todos los registros en employee
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM employee', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});


router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM employee WHERE id = ?', [id] ,(err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

// Lo exportamos
module.exports = router;