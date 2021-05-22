const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }
// setting up like mysql constraints

// ProductTag
// id
// Integer
// Doesn't allow null values
// Set as primary key
// Uses auto increment

// product_id
// Integer
// References the product model's id

// tag_id
// Integer
// References the tag model's id


//example from seeds
// {
//   product_id: 1,
//   tag_id: 6,
// }
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      //foreign key 
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      //foreign key reference
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
    //match the models
      modelName: 'producttag',
  }
);

module.exports = ProductTag;
