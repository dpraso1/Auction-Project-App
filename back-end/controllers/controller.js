'use strict';

const sequelize = require("../models/connection");
sequelize.sync();
const { Sequelize } = require('sequelize');

const user = require('../models/user.js')(sequelize, Sequelize);
const address = require('../models/address.js')(sequelize, Sequelize);
const card_information = require('../models/card_information.js')(sequelize, Sequelize);
const product = require('../models/product.js')(sequelize, Sequelize);
const bid = require('../models/bid.js')(sequelize, Sequelize);
const image = require('../models/image.js')(sequelize, Sequelize);
const category = require('../models/category.js')(sequelize, Sequelize);
const subcategory = require('../models/subcategory.js')(sequelize, Sequelize);

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
