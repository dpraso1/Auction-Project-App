const Sequelize = require('sequelize');

const sequelize = new Sequelize("auction", 'root', '', { 
    host: 'localhost', 
    dialect: "mysql" 
});

sequelize.authenticate().then(()=> {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.log('error:' + err);
});

const address = require('../models/address')(sequelize, Sequelize);
const bid = require('../models/bid')(sequelize, Sequelize);
const card_information = require('../models/card_information')(sequelize, Sequelize);
const category = require('../models/category')(sequelize, Sequelize);
const image = require('../models/image')(sequelize, Sequelize);
const product = require('../models/product')(sequelize, Sequelize);
const subcategory = require('../models/subcategory')(sequelize, Sequelize);
const user = require('../models/user')(sequelize, Sequelize);
/*product.sync();
image.sync();
address.sync();
card_information.sync();
bid.sync();
category.sync();
subcategory.sync();
user.sync();*/

//address-user
address.hasMany(user, {
    foreignKey: "address_id",
    sourceKey: "id"
 });
user.belongsTo(address, {
     foreignKey: "address_id",
     sourceKey: "id"
 });

//user-card_inf
user.hasMany(card_information, {
    foreignKey: "user_id",
    sourceKey: "id"
 });
card_information.belongsTo(user, {
     foreignKey: "user_id",
     sourceKey: "id"
 });

//category-product
category.hasMany(product, {
    foreignKey: "category_id",
    sourceKey: "id"
 });
product.belongsTo(category, {
     foreignKey: "category_id",
     sourceKey: "id"
 });

//category-subcategory
category.hasMany(subcategory, {
    foreignKey: "category_id",
    sourceKey: "id"
 });
subcategory.belongsTo(category, {
     foreignKey: "category_id",
     sourceKey: "id"
 });

//product-image
product.hasMany(image, {
    foreignKey: "product_id",
    sourceKey: "id"
 });
image.belongsTo(product, {
     foreignKey: "product_id",
     sourceKey: "id"
 });

//product-bid
product.hasMany(bid, {
    foreignKey: "product_id",
    sourceKey: "id"
 });
bid.belongsTo(product, {
     foreignKey: "product_id",
     sourceKey: "id"
 });

//user-bid
user.hasMany(bid, {
    as: "user",
    foreignKey: "user_id",
    sourceKey: "id"
 });
bid.belongsTo(user, {
    as: "user",
     foreignKey: "user_id",
     sourceKey: "id"
 });


module.exports = {sequelize, address, bid, card_information, category, subcategory, user, product, image};
