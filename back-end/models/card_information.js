const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define("card_information", {
        id: {
            type: Sequelize.UUID,
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
        },
        user_id: {
            type: Sequelize.UUID,
            foreignKey: true,
            allowNull: false,
            references: {
               model: 'user',
               key: 'id',
               as: 'user_id',
            }
        }
    }, {
        freezeTableName: true,
        timestamps: false
       });
       
    return Card;
};
