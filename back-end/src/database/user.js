const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.STRING,
            allowNull:false,
            primaryKey: true,
            unique: true
        }, 
        first_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, {freezeTableName: true});
    return User;
};
