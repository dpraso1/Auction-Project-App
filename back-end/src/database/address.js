const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define("address", {
        id: {
            type: Sequelize.STRING,
            allowNull:false,
            primaryKey: true,
            unique: true
        }, 
        street: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        zip_code: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        state: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, {freezeTableName: true});
    return Address;
};
