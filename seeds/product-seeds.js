const { Product } = require('../models');

const productData = [
  {
    product_name: 'Logo T-Shirt',
    price: 34.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Atheltic Sneakers',
    price: 93.0,
    stock: 28,
    category_id: 5,
  },
  {
    product_name: 'Baseball Baseball Cap',
    price: 22.99,
    stock: 15,
    category_id: 4,
  },
  {
    product_name: 'Billboard Top 100 CD',
    price: 12.99,
    stock: 42,
    category_id: 3,
  },
  {
    product_name: 'Biker Pants',
    price: 29.99,
    stock: 27,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
