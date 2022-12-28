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
      type: 'Ficción',
      URL : 'https://images.cdn1.buscalibre.com/fit-in/360x360/3d/40/3d40c2f022ed4690ed2a796473e51fd5.jpg'
      
      
    },
    {
      Titulo: 'Después de diciembre',
      Autor: 'Joana Marcus',
      Editorial:'Montena',
      Isbn: 97884187989171,
      type: 'Novela de amor',
      URL :'https://images.cdn3.buscalibre.com/fit-in/360x360/14/b9/14b9a7796430096d4ddd9916ff6738da.jpg'
      
    },
    {
      Titulo: 'Cómo hacer que te pasen cosas buenas',
      Autor: 'Marian Rojas Estapé',
      Editorial:'Planeta',
      Isbn: 9788467053302,
      type:'Autoayuda y Desarrollo personal',
      URL :'https://images.cdn3.buscalibre.com/fit-in/360x360/0e/e8/0ee89d1b0775c8eeac5593d130452bee.jpg'
      
    },
    {
      Titulo: 'Kalathras',
      Autor: 'Eric Cuaresma',
      Editorial:'Ediciones Martínez Roca',
      Isbn: 9788427043633,
      type:'Manga',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/97/4d/974dfa6b4ae7f959afd0a8345a60949e.jpg'
      
    },
    {
      Titulo: 'Manga, anime y videojuegos',
      Autor: 'Manuel Hernández-Pérez',
      Editorial:'Prensas De La Universidad De Zaragoza',
      Isbn: 9788416933365,
      type:'Expresiones artísticas del arte',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/d6/0f/d60fd18c087e9e0b80328e56a32630b1.jpg'
      
    },
    {
      Titulo: 'Detective Conan',
      Autor: 'Gosho Aoyama',
      Editorial:'Planeta De Agostini',
      Isbn: 9788413410609,
      type:'Manga',
      url :'https://images.cdn2.buscalibre.com/fit-in/360x360/cf/e6/cfe658e4d7a348aa988592518d1335c2.jpg'
      
    },
    {
      Titulo: 'Naruto',
      Autor: 'Masashi Kishimoto',
      Editorial:'Planeta Cómic',
      Isbn: 9788416889839,
      type:'Manga',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/e0/23/e023b63244e31b0bf8dd331312105768.jpg'
      
    },
    {
      Titulo: 'My hero academia',
      Autor: 'Kohei Horikoshi',
      Editorial:'Planeta De Agostini',
      Isbn: 9788411401838,
      type:'Manga',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/3a/c8/3ac86954e31b9018ca8a678a8d042e3e.jpg'
      
    },
    {
      Titulo: 'La noche que nos escuchamos',
      Autor: 'Albert Espinosa',
      Editorial:'Grijalbo',
      Isbn: 9788425361074,
      type:'Novela',
      url :'https://images.cdn2.buscalibre.com/fit-in/360x360/d4/0d/d40d93985b1ab4746f74385b002cb4af.jpg'
      
    },
    {
      Titulo: 'El mundo azul ama tu caos',
      Autor: 'Albert Espinosa',
      Editorial:'Debolsillo',
      Isbn: 9788466329811,
      type:'Ficción moderna y contemporánea',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/93/7a/937ab0a4c33b72ad0bb7508a1e17a810.jpg'
      
    },
    {
      Titulo: 'El mundo amarillo',
      Autor: 'Albert Espinosa',
      Editorial:'Grijalbo',
      Isbn: 8425342007,
      type:'Motivación, Autoestima y actitud positiva',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/4b/66/4b665c2cd479d2d5f972297fd0673d1f.jpg'
      
    },
    {
      Titulo: 'Finales que merecen una historia',
      Autor: 'Albert Espinosa',
      Editorial:'Grijalbo',
      Isbn: 9788425355899,
      type:'Novela de amor',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/72/d7/72d7643d81b736087c34e0b4382462c6.jpg'
    },
    {
      Titulo: 'Lo mejor de ir es volver',
      Autor: 'Albert Espinosa',
      Editorial:'Debolsillo',
      Isbn: 9788466354721,
      type:'Autoayuda y desarrollo personal',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/89/55/895590d6de43542fad8a1db73427aa22.jpg'
    },
    {
      Titulo: 'Brújulas que buscan sonrisas perdidas',
      Autor: 'Albert Espinosa',
      Editorial:'Debolsillo',
      Isbn: 8490327416,
      type:'Novelas de amor',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/d8/d8/d8d80a818605d71669d5f59dc7980295.jpg'
    },
    {
      Titulo: 'Herido diario',
      Autor: 'Rayden',
      Editorial:'Aguilar',
      Isbn: 9788403522558,
      type:'Poesía',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/46/0a/460a8bca00dcab8a4d9df1b2f73fb641.jpg'
    },
    {
      Titulo: 'Terminamos y otros poemas sin terminar',
      Autor: 'Rayden',
      Editorial:'Booket',
      Isbn: 9788467055658,
      type:'Poesía',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/59/f7/59f7141a99127600f5f67e0764404600.jpg'
    },
    {
      Titulo: 'Nunca será siempre',
      Autor: 'Rayden',
      Editorial:'Destino Infantil & Juvenil',
      Isbn: 9788408215295,
      type:'Poesía',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/3e/a9/3ea993eb29040a124e61e98f88eff249.jpg'
    },
    {
      Titulo: 'El mundo es un gato jugando con Australia',
      Autor: 'Rayden',
      Editorial:'Planeta',
      Isbn: 9788408206606,
      type:'Poesía',
      url :'https://images.cdn2.buscalibre.com/fit-in/360x360/b6/3b/b63bdf599122a2c133a696fc60829ad5.jpg'
    },
    {
      Titulo: 'Vademécum del optimista',
      Autor: 'Bernabé Tierno',
      Editorial:'Booket',
      Isbn: 9788499985299,
      type:'Autoayuda y desarrollo personal',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/a2/ae/a2ae550a3bddc984d24fcc362a2706a5.jpg'
    },
    {
      Titulo: 'Enciclopedia Pokémon',
      Autor: 'Libros De The Pokémon Company',
      Editorial:'Monteana',
      Isbn: 9788419169266,
      type:'Animación',
      url :'https://images.cdn2.buscalibre.com/fit-in/360x360/90/86/9086aff6f311afc7a01b119a5d11d3a3.jpg'
    },
    {
      Titulo: 'Pokémon , Aprende a dibujar',
      Autor: 'Varios Autores',
      Editorial:'Montena',
      Isbn: 9788490437995,
      type:'Videojuegos y juegos de Ordenador',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/fe/7e/fe7e8fd301a5c1880430a0157c89692d.jpg'
    },
    {
      Titulo: 'Guía de los Pokémon de Alola',
      Autor: 'Varios Autores',
      Editorial:'Montena',
      Isbn: 9788490439654,
      type:'Animación',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/e9/61/e9614f8f9910aece75dea22c090e9f1e.jpg'
    },
    {
      Titulo: 'El mundo de the witcher',
      Autor: 'Marcin Batylda',
      Editorial:'Gustavo Gili',
      Isbn: 9788467919318,
      type:'Novela gráfica',
      url :'https://images.cdn2.buscalibre.com/fit-in/360x360/e9/bc/e9bc8caef5dd1210ea98573b1f66baad.jpg'
    },
    {
      Titulo: 'Batman. Un hèroe de videojuego',
      Autor: 'José L. Ortega',
      Editorial:'Heroes De Papel',
      Isbn: 9788417649128,
      type:'Juegos de ordenador y en línea',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/07/12/0712f4ebdd94ef2186126bed083a07d1.jpg'
    },
    {
      Titulo: 'Tu vida, tu videojuego',
      Autor: 'Rodrigo Río Del Arco',
      Editorial:'Héroes De Papel',
      Isbn: 9788417649050,
      type:'Motivación, autoestima y actitud positiva',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/86/7a/867a18a659c3819a0f1a15863873c768.jpg'
    },
    {
      Titulo: 'Revolución Indie',
      Autor: 'Jonathan Leon - Manu Delgado',
      Editorial:'Heroes De Papel',
      Isbn: 9788417649166,
      type:'Diseño de Juegos de Ordenador',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/85/1b/851b72a0f4b3442f6eb8716fe0107632.jpg'
    },
    {
      Titulo: 'Guerreras princesas',
      Autor: 'David Martinez',
      Editorial:'Redbook',
      Isbn: 9788494826801,
      type:'Ciencia ficción',
      url :'https://images.cdn2.buscalibre.com/fit-in/360x360/2a/09/2a09b66f83b6f5645542e2af71ca45b5.jpg'
    },
    {
      Titulo: 'Testing de videojuegos',
      Autor: 'Ricardo Izquierdo',
      Editorial:'Ra-Ma',
      Isbn: 9788499648484,
      type:'Crítica literaria',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/b8/fd/b8fd7b5365a6ea65abf7213f993e6c28.jpg'
    },
    {
      Titulo: 'Estética en Videojuegos',
      Autor: 'José Alberto Corbal',
      Editorial:'Ra-Ma',
      Isbn: 9788499647289,
      type:' Programación de juegos',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/76/24/762423f144f7021e35661b43eb699214.jpg'
    },
    {
      Titulo: 'Cine y Videojuegos',
      Autor: 'Jose Maria Villalobos',
      Editorial:'Heroes De Papel',
      Isbn: 9788494288173,
      type:'Cine y televisión',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/e8/b9/e8b9d5bd0bf6eabd4e394752a3781a18.jpg'
    },
    {
      Titulo: 'Reina',
      Autor: 'Bebi Fernández',
      Editorial:'Booket',
      Isbn: 9788408253167,
      type:'Novela',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/e0/97/e0971e329f4efda02f7696e55903271d.jpg'
    },
    {
      Titulo: 'Princesas y lobas',
      Autor: 'Marta Mississippi',
      Editorial:'Montena',
      Isbn: 9788417773373,
      type:'Literatura general',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/b2/ba/b2bae56a5926a7e0f2db3e8018253bfb.jpg'
    },
    {
      Titulo: 'Diccionario de Términos de Videojuegos',
      Autor: 'Iván Ramírez Sánchez',
      Editorial:'Verbum',
      Isbn: 9788413375342,
      type:'Diccionarios temáticos',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/84/99/849927a6fe853cbb43c236d5d850391f.jpg'
    },
    {
      Titulo: 'Yellowstar: Conviértete en un Campeón de League of Legends',
      Autor: 'Bora Kim',
      Editorial:'Planeta',
      Isbn: 9788408178828,
      type:'Videojuegos',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/03/78/0378fca43e340e01c50c2320c932f596.jpg'
    },
    {
      Titulo: 'League of Dragons (Temeraire)',
      Autor: 'Naomi Novik',
      Editorial:'Del Rey',
      Isbn: 9780345522931,
      type:'Videojuegos',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/a9/60/a96084e28590f8886d7d75cbf12e7ea9.jpg'
    },
    {
      Titulo: 'Justice League Galaxy of Terrors',
      Autor: 'Simon Spurrier; Aaron Lopresti',
      Editorial:'Dc Comics',
      Isbn: 9781779509376,
      type:'Animación',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/d6/50/d6502a62f03256a2ad2d5c2c4141910d.jpg'
    },
    {
      Titulo: 'Memorias de una salvaje',
      Autor: 'Bebi Fernández',
      Editorial:'Planeta',
      Isbn: 9788408194453,
      type:'Ficción moderna y contemporánea',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/96/49/9649c371eb6d734c8a9efbb3c3531d57.jpg'
    },
    {
      Titulo: 'Amor y asco',
      Autor: 'Bebi Fernández',
      Editorial:'Muevetulengua',
      Isbn: 9788417284992,
      type:'Poesía',
      url :'https://images.cdn2.buscalibre.com/fit-in/360x360/8d/99/8d996a004b6c86301ddde8fee2d966d4.jpg'
    },
    {
      Titulo: 'El Poder de la Acción',
      Autor: 'Paulo Vieira',
      Editorial:'Urano',
      Isbn: 9788416720590,
      type:'Motivación, Autoestima y Actitud positiva',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/12/dd/12ddf2156fd757c6475f5a5bef191eed.jpg'
    },
    {
      Titulo: 'El Trastorno Esquizofrénico de la Acción Humana',
      Autor: 'Antonio Colodrón',
      Editorial:'Editorial Triacastela',
      Isbn: 9788460540083,
      type:'Psiquiatría',
      url :'https://images.cdn3.buscalibre.com/fit-in/360x360/c6/e5/c6e5f140e38301370572f481dcae3128.jpg'
    },
    {
      Titulo: 'Encuentra tu Persona Vitamina',
      Autor: 'Marian Rojas Estapé',
      Editorial:'Espasa',
      Isbn: 9789584297426,
      type:'Autoayuda y Desarrollo Personal',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/5b/55/5b55b3f312b7cc6844b44e6fc6434ed7.jpg'
    },
    {
      Titulo: 'Formacion y Orientacion Laboral 360º',
      Autor: 'Varios Autores',
      Editorial:'Editex, S.A.',
      Isbn: 9788413219936,
      type:'Ciencias económicas sobre finanzas',
      url :'https://images.cdn1.buscalibre.com/fit-in/360x360/af/8c/af8c59535174250324413dca76f0563c.jpg'
    },
  ], {});
  
},
async down(queryInterface, Sequelize) {

  }
};
