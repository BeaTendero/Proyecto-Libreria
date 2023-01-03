'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('categories', [{

      type: 'Autoayuda',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Juvenil',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    type: 'Poesía',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Videojuegos',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: 'Animación',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Cómic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Novela',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Novela gráfica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Autoestima',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Diseño',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Crítica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Literatura',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Diccionario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Ficción',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Novela de amor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Manga',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Desarrollo personal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    
  ], {});
},
  
down: async (queryInterface, Sequelize) => {
    
  await queryInterface.bulkDelete('categories', null, {});
 
}
};

