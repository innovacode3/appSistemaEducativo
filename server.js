const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const materiasRoutes = require('./routes/materiasRoutes');
require('dotenv').config();

const app = express();

app.use(cors());

//Middleware general
app.use(express.json());
app.use(bodyParser.json());
app.use(express.json({ limit: '50mb' })); // Middleware para parsear JSON en el body de las peticiones

//Rutas de los endpoints
app.use(
    materiasRoutes
);

//Crear la raíz de la API (una vez subido a vercel)
app.get('/', (req, res) => {
    res.send('API Sistema Educativo - Escuela Zoraida Mora de Franco');
})

//Exporta como función para vercel
module.exports = app