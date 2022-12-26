'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('libros', [

    
  
    {
      Titulo: 'La ciudad de las bestias',
      Autor: 'Isabel Allende',
      Editorial:'Delbolsillo',
      Isbn: 9707806915,
      
    },
    {
      Titulo: 'Después de diciembre',
      Autor: 'Joana Marcus',
      Editorial:'Montena',
      Isbn: 97884187989171,
      
    },
    {
      Titulo: 'Cómo hacer que te pasen cosas buenas',
      Autor: 'Marian Rojas Estapé',
      Editorial:'Planeta',
      Isbn: 9788467053302,
      
    },
    {
      Titulo: 'Kalathras',
      Autor: 'Eric Cuaresma',
      Editorial:'Ediciones Martínez Roca',
      Isbn: 9788427043633,
      
    },
    {
      Titulo: 'Manga, anime y videojuegos',
      Autor: 'Manuel Hernández-Pérez',
      Editorial:'Prensas De La Universidad De Zaragoza',
      Isbn: 9788416933365,
      
    },
    {
      Titulo: 'Detective Conan',
      Autor: 'Gosho Aoyama',
      Editorial:'Planeta De Agostini',
      Isbn: 9788413410609,
      
    },
    {
      Titulo: 'Naruto',
      Autor: 'Masashi Kishimoto',
      Editorial:'Planeta Cómic',
      Isbn: 9788416889839,
      
    },
    {
      Titulo: 'My hero academia',
      Autor: 'Kohei Horikoshi',
      Editorial:'Planeta De Agostini',
      Isbn: 9788411401838,
      
    },
    {
      Titulo: 'La noche que nos escuchamos',
      Autor: 'Albert Espinosa',
      Editorial:'Grijalbo',
      Isbn: 9788425361074,
      
    },
    {
      Titulo: 'El mundo azul ama tu caos',
      Autor: 'Albert Espinosa',
      Editorial:'Debolsillo',
      Isbn: 9788466329811,
      
    },
    {
      Titulo: 'El mundo amarillo',
      Autor: 'Albert Espinosa',
      Editorial:'Grijalbo',
      Isbn: 8425342007,
      
    },
    {
      Titulo: 'Finales que merecen una historia',
      Autor: 'Albert Espinosa',
      Editorial:'Grijalbo',
      Isbn: 9788425355899,
      
    },
    {
      Titulo: 'Lo mejor de ir es volver',
      Autor: 'Albert Espinosa',
      Editorial:'Debolsillo',
      Isbn: 9788466354721,
      
    },
    {
      Titulo: 'Brújulas que buscan sonrisas perdidas',
      Autor: 'Albert Espinosa',
      Editorial:'Debolsillo',
      Isbn: 8490327416,
      
    },
    {
      Titulo: 'Herido diario',
      Autor: 'Rayden',
      Editorial:'Aguilar',
      Isbn: 9788403522558,
      
    },
    {
      Titulo: 'Terminamos y otros poemas sin terminar',
      Autor: 'Rayden',
      Editorial:'Booket',
      Isbn: 9788467055658,
      
    },
    {
      Titulo: 'Nunca será siempre',
      Autor: 'Rayden',
      Editorial:'Destino Infantil & Juvenil',
      Isbn: 9788408215295,
      
    },
    {
      Titulo: 'El mundo es un gato jugando con Australia',
      Autor: 'Rayden',
      Editorial:'Planeta',
      Isbn: 9788408206606,
      
    },
    {
      Titulo: 'Vademécum. Actitudes espirituales para la celebración',
      Autor: 'Varios Autores',
      Editorial:'Centre De Pastoral Litúrgica',
      Isbn: 8474677203,
      
    },
    {
      Titulo: 'Vademécum del optimista',
      Autor: 'Bernabé Tierno',
      Editorial:'Booket',
      Isbn: 9788499985299,
      
    },
    {
      Titulo: 'Enciclopedia Pokémon',
      Autor: 'Libros De The Pokémon Company',
      Editorial:'Monteana',
      Isbn: 9788419169266,
      
    },
    {
      Titulo: 'Pokémon , Aprende a dibujar',
      Autor: 'Varios Autores',
      Editorial:'Montena',
      Isbn: 9788490437995,
      
    },
    {
      Titulo: 'Guía de los Pokémon de Alola',
      Autor: 'Varios Autores',
      Editorial:'Montena',
      Isbn: 9788490439654,
      
    },
    {
      Titulo: 'El mundo de the witcher',
      Autor: 'Marcin Batylda',
      Editorial:'Gustavo Gili',
      Isbn: 9788467919318,
      
    },
    {
      Titulo: 'Batman. Un hèroe de videojuego',
      Autor: 'José L. Ortega',
      Editorial:'Heroes De Papel',
      Isbn: 9788417649128,
      
    },
    {
      Titulo: 'Tu vida, tu videojuego',
      Autor: 'Rodrigo Río Del Arco',
      Editorial:'Héroes De Papel',
      Isbn: 9788417649050,
      
    },
    {
      Titulo: 'Revolución Indie',
      Autor: 'Jonathan Leon - Manu Delgado',
      Editorial:'Heroes De Papel',
      Isbn: 9788417649166,
      
    },
    {
      Titulo: 'Guerreras princesas',
      Autor: 'David Martinez',
      Editorial:'Redbook',
      Isbn: 9788494826801,
      
    },
    {
      Titulo: 'Testing de videojuegos',
      Autor: 'Ricardo Izquierdo',
      Editorial:'Ra-Ma',
      Isbn: 9788499648484,
      
    },
    {
      Titulo: 'Estética en Videojuegos',
      Autor: 'José Alberto Corbal',
      Editorial:'Ra-Ma',
      Isbn: 9788499647289,
      
    },
    {
      Titulo: 'Cine y Videojuegos',
      Autor: 'Jose Maria Villalobos',
      Editorial:'Heroes De Papel',
      Isbn: 9788494288173,
      
    },
    {
      Titulo: 'Reina',
      Autor: 'Bebi Fernández',
      Editorial:'Booket',
      Isbn: 9788408253167,
      
    },
    {
      Titulo: 'Princesas y lobas',
      Autor: 'Marta Mississippi',
      Editorial:'Montena',
      Isbn: 9788417773373,
      
    },
    {
      Titulo: 'Diccionario de Términos de Videojuegos',
      Autor: 'Iván Ramírez Sánchez',
      Editorial:'Verbum',
      Isbn: 9788413375342,
      
    },
    {
      Titulo: 'Yellowstar: Conviértete en un Campeón de League of Legends',
      Autor: 'Bora Kim',
      Editorial:'Planeta',
      Isbn: 9788408178828,
      
    },
    {
      Titulo: 'League of Dragons (Temeraire)',
      Autor: 'Naomi Novik',
      Editorial:'Del Rey',
      Isbn: 9780345522931,
      
    },
    {
      Titulo: 'Justice League Galaxy of Terrors',
      Autor: 'Simon Spurrier; Aaron Lopresti',
      Editorial:'Dc Comics',
      Isbn: 9781779509376,
      
    },
    {
      Titulo: 'Memorias de una salvaje',
      Autor: 'Bebi Fernández',
      Editorial:'Planeta',
      Isbn: 9788408194453,
      
    },
    {
      Titulo: 'Amor y asco',
      Autor: 'Bebi Fernández',
      Editorial:'Muevetulengua',
      Isbn: 9788417284992,
      
    },
    {
      Titulo: 'El Poder de la Acción',
      Autor: 'Paulo Vieira',
      Editorial:'Urano',
      Isbn: 9788416720590,
      
    },
    {
      Titulo: 'El Trastorno Esquizofrénico de la Acción Humana',
      Autor: 'Antonio Colodrón',
      Editorial:'Editorial Triacastela',
      Isbn: 9788460540083,
      
    },
    {
      Titulo: 'Encuentra tu Persona Vitamina',
      Autor: 'Marian Rojas Estapé',
      Editorial:'Espasa',
      Isbn: 9789584297426,
      
    },
    {
      Titulo: 'Formacion y Orientacion Laboral 360º',
      Autor: 'Varios Autores',
      Editorial:'Editex, S.A.',
      Isbn: 9788413219936,
      
    },
  ], {});
  
},
async down(queryInterface, Sequelize) {

  }
};
