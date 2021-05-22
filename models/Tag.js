const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Tag extends Model {}
//set up like mysql constraints
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    //match the model names
    modelName: 'tag'
  }
);

module.exports = Tag;
