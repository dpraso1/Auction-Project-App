const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("category", {
        id: {
            type: Sequelize.STRING,
            allowNull:false,
            primaryKey: true,
            unique: true
        }, 
        category_name: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, {freezeTableName: true});
    return Category;
};
