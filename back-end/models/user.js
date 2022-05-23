const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        id: {
            type: Sequelize.UUID,
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
        },
        address_id: {
            type: Sequelize.UUID,
            foreignKey: true,
            allowNull: false,
            references: {
               model: 'address',
               key: 'id',
               as: 'address_id',
            }
        }
    }, {
        freezeTableName: true,
        timestamps: false
       });

       
    return User;
};
