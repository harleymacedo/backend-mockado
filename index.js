//Importações
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

//Rotas
const professorRoute = require('./route/professorRoute');

//Configurações
app.use(express.json());
app.use(professorRoute);

//Sincronizar DB
// (async () => {
//     const database = require('./model/database');
//     const Professor = require('./model/professor');
//     try {
//         const resultado = await database.sync();
//         console.log(resultado);
//     } catch (error) {
//         console.log(error);
//     }
// })();

//Worker
app.listen(process.env.PORT || 3000);
