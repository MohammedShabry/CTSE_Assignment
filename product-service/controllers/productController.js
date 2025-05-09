const Product = require('../models/Product');

//get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send('Server Error');
  }//hytssds
};

//create products
exports.createProduct = async (req, res) => {
  const { name, price, description } = req.body;
  try {
    const newProduct = new Product({ name, price, description });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
