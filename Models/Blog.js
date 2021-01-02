const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../databases/sequelize');

module.exports = sequelize.define('Blog', {
    // Model attributes are defined here
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    article: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: false
});