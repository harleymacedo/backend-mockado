const Sequelize = require('sequelize');
const URL_DB = process.env.URL_DB;
const sequelize = new Sequelize(URL_DB, {dialect: 'postgres'});

module.exports = sequelize;