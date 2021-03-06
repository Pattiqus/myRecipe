const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Ingrediants extends Model {}

Ingrediants.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
     
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ingrediants',
  }
);

module.exports = Ingrediants;