const { Sequelize } = require('sequelize');
module.exports = new Sequelize('Users', 'postgres', '', { host: 'localhost', port: '5432', dialect: 'postgres' });