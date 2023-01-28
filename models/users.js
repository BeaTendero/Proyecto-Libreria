'use strict';
const {Model} = require('sequelize');
const sequelize = require ('../db/db')

class users extends Model {};

module.exports = (sequelize, DataTypes) => {
  
  users.init({
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
        validate: {
            isEmail: true,
            len: [1, 100]
        },
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        
    },
    user: {
        type: DataTypes.STRING,
        validate: {
            len: [1, 40]
        }
    },
    rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    freezeTableName: true,
    timestamps: false
  });
  return users;
}