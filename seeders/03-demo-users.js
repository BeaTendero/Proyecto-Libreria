'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', [
      {
        name: 'Bea',
        email: 'Bea@gmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Jose Marin',
        email: 'JoseMarin@gmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Alicia',
        email: 'Alicia@gmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Ana',
        email: 'Ana@gmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete("users", null, {});

  }
};
