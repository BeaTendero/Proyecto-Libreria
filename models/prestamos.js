'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prestamos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Prestamos.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Prestamos',
  });
  return Prestamos;
};