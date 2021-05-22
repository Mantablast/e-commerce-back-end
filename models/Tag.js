const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Tag extends Model { }
//set up like mysql constraints

// Tag
// id
// Integer
// Doesn't allow null values
// Set as primary key
// Uses auto increment

// tag_name
// String


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
      //can be null according to criteria
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
