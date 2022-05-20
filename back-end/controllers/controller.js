'use strict';

const sequelize = require("../src/database/connection");
sequelize.sync();
const { Sequelize } = require('sequelize');

const user = require('../src/database/user.js')(sequelize, Sequelize);
const address = require('../src/database/address.js')(sequelize, Sequelize);
const card_information = require('../src/database/card_information.js')(sequelize, Sequelize);
const product = require('../src/database/product.js')(sequelize, Sequelize);
const bid = require('../src/database/bid.js')(sequelize, Sequelize);
const image = require('../src/database/image.js')(sequelize, Sequelize);
const category = require('../src/database/category.js')(sequelize, Sequelize);
const subcategory = require('../src/database/subcategory.js')(sequelize, Sequelize);

user.sync();
address.sync();
card_information.sync();
product.sync();
bid.sync();
image.sync();
category.sync();
subcategory.sync();

exports.getNewArrivals = (req, res) => {
    product.findAll({
        limit: 8,
        order: [
            ['start_date', 'DESC']
        ],

        attributes: [
            'id', 
            'product_name', 
            'product_description', 
            'product_price', 
            'start_date',
            'sold'
        ]

    }).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message: err

        });
    });
};


exports.getLastChance = (req, res) => {
product.findAll({
        limit: 8,
        order: [
            ['end_date', 'ASC']
        ],
        
        attributes: [
            'id', 
            'product_name', 
            'product_description', 
            'product_price', 
            'end_date',
            'sold'
        ]

    }).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message: err

        });
    }); 
};


exports.getProductCover = (req, res) => {
    product.findOne({
        order: sequelize.random()
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
          message: err

        });
    }); 
};