var express = require('express');
var router = express.Router();
const Cart = require('../lib/cart');
const Item = require('../lib/item');

/* GET users listing. */
router.get('/getItems', function(req, res, next) {
  let cart = new Cart();
  
  if (req.cookies["cart"] !== undefined) {
    req.cookies["cart"].forEach((val) => {
      cart.addItem(new Item(val.id, val.name, val.price, val.onSale), val.quantity);
    });
  }

  let items = [];

  cart.getItems().forEach((val, key) => {
    items.push({id: key.id, name: key.name, price: key.price, quantity: val})
  })

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(items));
});

router.put('/addItem', function(req, res, next) {
  let item = req.app.use(bodyParser.json());
  let newItem = new Item(item["id"], item["name"], item["price"], item["onSale"]);

  
  
  res.send('respond with a resource');
});

router.get('/onSaleItems', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/itemizedList', function(req, res, next) {
  let cart = new Cart();
  cart.addItem(new Item(1,"Popcorn", 1.0, true),2);

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(cart.itemizedList()));
});

router.get('/itemQuantities', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
