'use strict';

var  moment = require('moment');
const { randomUUID } = require('crypto');
const { sequelize, product, image, user, bid } = require("../models/connection");

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
            attributes: ['id', 'image_link']
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
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
            attributes: ['id', 'image_link']
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
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
            attributes: ['id', 'image_link']
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err
        });
    });
};



exports.getProductById = (req, res) => {
    const id = req.params.id;
    product.findByPk(id, {
        include: {
            model: image,
            attributes: ['id', 'image_link']
        }
    }).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: "Cannot find product with id" + id
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error displaying product with id" + id
        });
    });
};

exports.getBid = (req, res) => {
    const id = req.params.id;
    
    bid.findAll({
        where: {
            product_id: id
        },
        order: [
            ['amount', 'DESC']
        ],
        attributes: [
            'id',
            'date_time',
            'amount'
        ],
        include: {
            model: user,
            as: 'user',
            attributes: ['id', 'first_name', 'last_name']
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err
        });
    });

};


exports.postBid = (async (req, res) => {

    const randomUser = await user.findOne({
        order: sequelize.random(),
    });   

    const id = randomUUID();
    const productId = req.params.id;
    const userId = randomUser.id;
    const date = moment();
    const amount = req.body.amount;
    
    const maxBid = await bid.findOne({
        attributes: [[sequelize.fn('max', sequelize.col('amount')), 'highestBid']],
    });

    const highestBid = maxBid.dataValues.highestBid;
    const Product = await product.findByPk(productId);

    if (moment(Product.end_date).isBefore(date)) {
        res.status(400).send("The auction for this product is over!");
        return;
    }
    if (amount <= highestBid) {
        res.status(400).send("New amount should be higher than the current highest bid");
        return;
    }
    if (amount <= Product.product_price) {
        res.status(400).send("Amount should be higher than the current amount");
        return;
    }
    if (amount <= 0) {
        res.status(400).send("Amount has to be greater than 0!");
        return;
    } 

    const Bid = {
        id: id,
        date_time: date,
        amount: amount,
        product_id: productId,
        user_id: userId
    };

    bid.create(Bid)

    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "An error occured while adding the bid!"
        });
    });
});