'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Prestamos', {
      id_prestamo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.STRING
      },
      id_producto: { //ponemos los nombres de los campos sin mas, no hay que expecificar la relacion aquí
        type: Sequelize.INTEGER
      },
      id_cliente: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
     //con addConstraint, podemos añadir FK, PK y otros campos especiales, en caso de FK es con estas opciones
    //importante que en los models tengamos las fk referenciadas como foreignKey en las relaciones
    await queryInterface.addConstraint('prestamos', {
      fields: ['id_producto'], //la columna en pedidos a la que afecta la FK
      type: 'foreign key',
      name: 'id_producto',
      references: {
        table: 'libros',
        field: 'id_producto'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })

    await queryInterface.addConstraint('prestamos', {
      fields: ['id_users'],
      type: 'foreign key',
      name: 'id_users',
      references: {
        table: 'users',
        field: 'id_users'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('prestamos');
  }
};
