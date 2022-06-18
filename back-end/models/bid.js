const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Bid = sequelize.define("bid", {
        id: {
            type: Sequelize.UUID,
            allowNull:false,
            primaryKey: true,
            unique: true,
        }, 
        date_time: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        amount: {
            type: Sequelize.DOUBLE,
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
        },
        product_id: {
            type: Sequelize.UUID,
            foreignKey: true,
            allowNull: false,
            references: {
               model: 'product',
               key: 'id',
               as: 'product_id',
            }
        }
    }, {
        freezeTableName: true,
        timestamps: false
       });

    return Bid;
};
