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



module.exports = sequelize;
