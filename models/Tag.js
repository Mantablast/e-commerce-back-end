const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}
//example from seeds
// {
//   tag_name: 'rock music',
// },
Tag.init(
  {
    tag: {
    type: DataTypes.STRING,
    allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
