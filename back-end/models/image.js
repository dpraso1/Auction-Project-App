const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("image", {
        id: {
            type: Sequelize.UUID,
            allowNull:false,
            primaryKey: true,
            unique: true
        }, 
        image_link: {
            type: Sequelize.STRING,
            allowNull: false,
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
       
    return Image;
};
