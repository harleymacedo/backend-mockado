const Sequelize = require('sequelize');
const database = require('./database');

const Disciplina = database.define('disciplina', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ch: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = Disciplina;