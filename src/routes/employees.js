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

// DELETE An Employee
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM employee WHERE id = ?', [id], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Employee Deleted'});
      } else {
        console.log(err);
      }
    });
  });
  
  // INSERT An Employee
  router.post('/', (req, res) => {
    const {id, name, salary} = req.body;
    console.log(id, name, salary);
    const query = `
      CALL employeeAddOrEdit(?, ?, ?);
    `;
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Employeed Saved'});
      } else {
        console.log(err);
      }
    });
  
  });
  
  router.put('/:id', (req, res) => {
    const { name, salary } = req.body;
    const { id } = req.params;
    const query = `
      CALL employeeAddOrEdit(?, ?, ?);
    `;
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Employee Updated'});
      } else {
        console.log(err);
      }
    });
  });

// Lo exportamos
module.exports = router;