// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsToMany(Category, {
  through:{
    model: Tag,
    unique: false
  },
  as: 'products_category'
})

// Categories have many Products
Category.belongsToMany(Product, {
  through:{
    model: Tag,
    unique: false
  },
  as: 'category_products'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through:{
    model: ProductTag,
    unique: false
  },
  as: 'product_tags'
})

// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Product, {
  through:{
    model: ProductTag,
    unique: false
  },
  as: 'tagged_products'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
