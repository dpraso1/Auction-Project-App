const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define("card_information", {
        id: {
            type: Sequelize.STRING,
            allowNull:false,
            primaryKey: true,
            unique: true
        }, 
        name_on_card: {
            type: Sequelize.STRING,
            allowNull: false,
        },
       card_number: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        expiration_date: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        month: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        CVC_CW: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    }, {freezeTableName: true});
    return Card;
};
