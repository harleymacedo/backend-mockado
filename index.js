//Importações
const express = require('express');
const app = express();

//Rotas
const professorRoute = require('./route/professorRoute');

//Configurações
app.use(express.json());
app.use(professorRoute);

//Worker
app.listen(process.env.PORT || 3000);
