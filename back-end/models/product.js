const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
        id: {
            type: Sequelize.UUID,
            allowNull:false,
            primaryKey: true,
            unique: true
        }, 
        product_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        product_description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        product_price: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        start_date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        end_date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        sold: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        category_id: {
            type: Sequelize.UUID,
            foreignKey: true,
            allowNull: false,
            references: {
               model: 'category',
               key: 'id',
               as: 'category_id',
            }
        }
    }, {
        freezeTableName: true,
        timestamps: false
       });
       
    return Product;
};
