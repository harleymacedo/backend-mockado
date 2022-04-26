const Sequelize = require('sequelize');
const database = require('./database');

const Professor = database.define('professor', {
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
    area: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Professor;
