const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    tel: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    location: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User
