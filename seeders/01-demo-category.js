'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('categories', [{

      type: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
    type: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      type: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    
  ], {});
},
  
down: async (queryInterface, Sequelize) => {
    
  await queryInterface.bulkDelete('categories', null, {});
 
}
};

