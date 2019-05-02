const express = require('express');
const app = express();

// Settings
// Sección de configuración de la aplicación
// Puerto, Nombre, Motor de plantillas, etc...
app.set('port', process.env.PORT || 3000);

// Middleware
// Funciones que se ejecutan antes de llegar a las rutas
app.use(express.json());

// Rutas
// Crear URLs para procesar datos
app.use(require('./routes/employees'));

// Starting de Server

app.listen(3000, () => {
    console.log('Server on port 3000');
});
