// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }
// Product

// id
// Integer
// Doesn't allow null values
// Set as primary key
// Uses auto increment

// product_name
// String
// Doesn't allow null values

// price
// Decimal
// Doesn't allow null values
// Validates that the value is a decimal

// stock
// Integer
// Doesn't allow null values
// Set a default value of 10
// Validates that the value is numeric

// category_id
// Integer
// References the category model's id


// set up fields and rules for Product model
//means product table
Product.init(
  {
    // trying id, prime key and have auto incriment, setting up like mysql constraints
    //required: id, product_name, price, stock, category_id
    //allowNulL: false >> must be filled in
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        isNumeric: true
      },
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      //foreign key
      references: {
        model: 'category',
        key: 'id'
      },
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
