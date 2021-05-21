// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category **belongsTo
//Attach product to category
Product.belongsTo(Category, {
//attach foreign key
foreignKey: 'category_id',
}
);
// Categories have many Products **hasMany
//Switch from above
Category.hasMany(Product, {
//Attach foreign key
foreignKey: 'category_id',
}
);
// Products belongToMany Tags (through ProductTag) **likely use belongsToMany option
Product.belongsToMany(Tag, {
  through: ProductTag,
  //attach to foreign key 
  foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag) **likely use belongsToMany option

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
