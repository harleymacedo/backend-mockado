const Sequelize = require('sequelize');
const database = require('./conexao');

const Disciplia = database.define('disciplina', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
});