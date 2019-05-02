// Requerimos el modulo mysql y lo guardamos en una variable
const mysql = require('mysql');

// Guardamos los datos de conexión en 
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'boris',
    password: 'password',
    database: 'company'
});

// Creamos la conexión
mysqlConnection.connect(function (err){
    if(err) {
        // Mensaje de error
        console.log(err);
        return;
    } else {
        // Mensaje de Success
        console.log('Db is connected');
    }
});

// Exportamos el módulo
module.exports = mysqlConnection;