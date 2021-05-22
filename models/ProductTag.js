const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }
// setting up like mysql constraints
//product tag will require id, 
//allowNulL: false >> must be filled in
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
      allowNull: false,
      //foreign key 
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
