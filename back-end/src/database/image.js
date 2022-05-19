const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("image", {
        id: {
            type: Sequelize.STRING,
            allowNull:false,
            primaryKey: true,
            unique: true
        }, 
        image_link: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, {freezeTableName: true});
    return Image;
};
