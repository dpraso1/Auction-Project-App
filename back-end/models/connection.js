const { append } = require('express/lib/response');
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

 const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;

const user = require('./user.js')(sequelize, Sequelize);
const address = require('./address.js')(sequelize, Sequelize);
const card_information = require('./card_information.js')(sequelize, Sequelize);
const product = require('./product.js')(sequelize, Sequelize);
const bid = require('./bid.js')(sequelize, Sequelize);
const image = require('./image.js')(sequelize, Sequelize);
const category = require('./category.js')(sequelize, Sequelize);
const subcategory = require('./subcategory.js')(sequelize, Sequelize);

user.sync();
address.sync();
card_information.sync();
product.sync();
bid.sync();
image.sync();
category.sync();
subcategory.sync();

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
    foreignKey: "category_id",
    sourceKey: "id"
 });
image.belongsTo(product, {
     foreignKey: "category_id",
     sourceKey: "id"
 });

//product-bid
product.hasMany(bid, {
    foreignKey: "category_id",
    sourceKey: "id"
 });
bid.belongsTo(product, {
     foreignKey: "category_id",
     sourceKey: "id"
 });

//user-bid
user.hasMany(bid, {
    foreignKey: "category_id",
    sourceKey: "id"
 });
bid.belongsTo(user, {
     foreignKey: "category_id",
     sourceKey: "id"
 });


module.exports = sequelize;
