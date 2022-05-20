const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const mysql = require('mysql');

const app = express();

const controller = require('./controllers/controller');
const sequelize = require("./src/database/connection");
sequelize.sync();
const { Sequelize } = require('sequelize');


const user = require('./src/database/user.js')(sequelize, Sequelize);
const address = require('./src/database/address.js')(sequelize, Sequelize);
const card_information = require('./src/database/card_information.js')(sequelize, Sequelize);
const product = require('./src/database/product.js')(sequelize, Sequelize);
const bid = require('./src/database/bid.js')(sequelize, Sequelize);
const image = require('./src/database/image.js')(sequelize, Sequelize);
const category = require('./src/database/category.js')(sequelize, Sequelize);
const subcategory = require('./src/database/subcategory.js')(sequelize, Sequelize);

user.sync();
address.sync();
card_information.sync();
product.sync();
bid.sync();
image.sync();
category.sync();
subcategory.sync();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/products/new-arrivals', controller.getNewArrivals);
app.get('/api/products/last-chance', controller.getLastChance);
app.get('/api/products/product-cover', controller.getProductCover);

app.listen(8080);

 
module.exports = app;

