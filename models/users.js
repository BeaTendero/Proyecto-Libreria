'use strict';
const {Model} = require('sequelize');
const sequelize = require ('../db/db')

class user extends Model {};

module.exports = (sequelize, DataTypes) => {
  
  user.init({
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
        validate: {
            len: [1, 25]
        }
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
  return user;
}