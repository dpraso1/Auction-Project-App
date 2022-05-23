const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Subcategory = sequelize.define("subcategory", {
        id: {
            type: Sequelize.UUID,
            allowNull:false,
            primaryKey: true,
            unique: true
        }, 
        subcategory_name: {
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
       
    return Subcategory;
};
