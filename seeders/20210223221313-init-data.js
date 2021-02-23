'use strict';
const db = require('../models')
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await db.sequelize.sync({force:true});
    console.log('all models synced');

    await queryInterface.bulkDelete('recipes', null, {truncate: true, cascade: true, restartIdentity: true});

    const bulkRecipes = await queryInterface.bulkInsert('recipes', [
      {
        name: "Turkish Chickpea Burgers",
        picture: "https://spoonacular.com/recipeImages/turkish-chickpea-burgers-1118357.jpg",
        servings: 2,
        preptime: 78,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lemon-Pepper Fettucine Alfredo',
        picture: 'https://spoonacular.com/recipeImages/Lemon-Pepper-Fettucine-Alfredo-649850.jpg',
        servings: 4,
        preptime: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lentils and Rice',
        picture: 'https://spoonacular.com/recipeImages/lentils-and-rice-33631.jpg',
        servings: 4,
        preptime: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {returning: true});
    console.log('bulk insert: ', bulkRecipes);

    await queryInterface.bulkDelete('users', null, {truncate: true, cascade: true, restartIdentity: true});

    const bulkUsers = await queryInterface.bulkInsert('users', [
      {
        email: 'rainbow@example.com',
        name: 'rainbow',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'sandy@example.com',
        name: 'sandy',
        password: bcrypt.hashSync('sandy', 12),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'lucy@example.com',
        name: 'lucy',
        password: bcrypt.hashSync('lucy', 12),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'alan@example.com',
        name: 'alan',
        password: bcrypt.hashSync('alan', 12),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {returning: true});
    console.log('bulk insert: ', bulkUsers);
    const bulkUsers = await queryInterface.bulkInsert('users', [
      {
        email: 'rainbow@example.com',
        name: 'rainbow',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'sandy@example.com',
        name: 'sandy',
        password: bcrypt.hashSync('sandy', 12),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'lucy@example.com',
        name: 'lucy',
        password: bcrypt.hashSync('lucy', 12),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'alan@example.com',
        name: 'alan',
        password: bcrypt.hashSync('alan', 12),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {returning: true});
    console.log('bulk insert: ', bulkUsers);

    await queryInterface.bulkDelete('users', null, {truncate: true, cascade: true, restartIdentity: true});

    const bulkIngredients = await queryInterface.bulkInsert('ingredients', [
      {
        name: 'canned chickpeas',
        quantity: '1 can',
        recipeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'red onion',
        quantity: '40 ml',
        recipeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'parsley',
        quantity: '15 g',
        recipeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'cilantro',
        quantity: '4 g',
        recipeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'chickpea flour',
        quantity: '2 Tbsps',
        recipeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'olive oil',
        quantity: '2 Tbsps',
        recipeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'plain yogurt',
        quantity: '1 Tbsps',
        recipeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'kosher salt',
        quantity: '1 tsp',
        recipeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ground cumin',
        quantity: '1 tsp',
        recipeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'fresh dill',
        quantity: '1 tsp',
        recipeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'paprika',
        quantity: '1 tsp',
        recipeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'allspice',
        quantity: '0.25 tsps',
        recipeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'cayenne',
        quantity: '0.25 tsps',
        recipeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'chickpea flour',
        quantity: '2 Tbsps',
        recipeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'garlic powder',
        quantity: '0.25 tsps',
        recipeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'fresh dried lemon pepper',
        quantity: '453 g',
        recipeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'butter',
        quantity: '4 Tbsps',
        recipeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'heavy cream',
        quantity: '357 ml',
        recipeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'nutmeg',
        quantity: '1 serving',
        recipeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'lemon zest',
        quantity: '2 tsps',
        recipeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'pecorino romano cheese',
        quantity: '100 g',
        recipeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'black pepper',
        quantity: '1 tsp',
        recipeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'salt',
        quantity: '1 serving',
        recipeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {returning: true});
    console.log('bulk insert: ', bulkUsers);

    const bulkInstructions = await queryInterface.bulkInsert('instructions', [
      {
        email: 'rainbow@example.com',
        name: 'rainbow',
        password: bcrypt.hashSync('password', 12),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'sandy@example.com',
        name: 'sandy',
        password: bcrypt.hashSync('sandy', 12),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'lucy@example.com',
        name: 'lucy',
        password: bcrypt.hashSync('lucy', 12),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'alan@example.com',
        name: 'alan',
        password: bcrypt.hashSync('alan', 12),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {returning: true});
    console.log('bulk insert: ', bulkUsers);



    const bulkdogHats = await queryInterface.bulkInsert('doghats', [
      {
        dogId: bulkDogs[0].id,
        hatId: bulkHats[0].id,
      },
    ], {returning:true})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
