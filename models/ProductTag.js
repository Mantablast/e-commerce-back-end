const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}
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
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
