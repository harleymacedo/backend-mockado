//Importações
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const database = require('./model/database');

//Rotas
const professorRoute = require('./route/professorRoute');
const disciplinaRoute = require('./route/disciplinaRoute');

//Configurações
app.use(express.json());
app.use(professorRoute);
app.use(disciplinaRoute);

// Sincronizar DB
// database.sync( () => {console.log('Database conectado')} );

//Worker
app.listen(process.env.PORT || 3000);
