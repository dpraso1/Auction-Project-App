const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
        id: {
            type: Sequelize.STRING,
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
        time_left: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        sold: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, {freezeTableName: true});
    return Product;
};
