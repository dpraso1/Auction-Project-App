const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Subcategory = sequelize.define("subcategory", {
        id: {
            type: Sequelize.STRING,
            allowNull:false,
            primaryKey: true,
            unique: true
        }, 
        subcategory_name: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, {freezeTableName: true});
    return Subcategory;
};
