'use strict';

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

        limit: 5,
        where: {
            product_id: id
        },
        order: [
            ['date_time', 'DESC']
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

/*exports.postBid = (req, res) => {
    let user_id;
    let product_id;
    const bid = {
        date_time: req.body.date_time,
        amount: req.body.amount,
        zip_code: req.body.zip_code,
        user_id: user.id,
        product_id: product.id,
    };

    bid.create(bid)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occured while adding the bid!"
            });
        });
};
*/