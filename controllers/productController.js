const { findAll, findById } = require('../models/productModel');

const getProducts = async (req, res) => {
  try {
    const products = await findAll();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (req, res, id) => {
  try {
    const product = await findById(id);
    if (!product) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Product not found' }));
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getProducts, getProduct };
