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
      Prestamos.belongsTo(models.libros, { foreignKey: 'id_libros' })
      Prestamos.belongsTo(models.users, { foreignKey: 'id_users' })
    }
  }
  Prestamos.init({
    id_prestamos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    fecha: DataTypes.DATE,
    cantidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Prestamos',
  });
  return Prestamos;
};