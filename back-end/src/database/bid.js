const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Bid = sequelize.define("bid", {
        id: {
            type: Sequelize.STRING,
            allowNull:false,
            primaryKey: true,
            unique: true
        }, 
        date_time: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        amount: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        zip_code: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }, {freezeTableName: true});
    return Bid;
};
