const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const controller = require('./controllers/controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/api/products/new-arrivals', controller.getNewArrivals);
app.get('/api/products/last-chance', controller.getLastChance);
app.get('/api/products/product-cover', controller.getProductCover);
app.get('/api/products/:id', controller.getProductById);
app.get('/api/products/:id/bids', controller.getBid);
app.post('/api/products/:id/bid', controller.postBid);


const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

module.exports = app;
