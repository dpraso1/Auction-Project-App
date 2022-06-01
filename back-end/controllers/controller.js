'use strict';

const {sequelize, product, image} = require("../models/connection");

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
        ],
        include: {
            model: image,
            attributes:['id', 'image_link']
        }
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
        ],
        include: {
            model: image,
            attributes:['id', 'image_link']
        }
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
        order: sequelize.random(),
        include: {
            model: image,
            attributes:['id', 'image_link']
        }
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
