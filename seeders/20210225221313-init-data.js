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
      {
        name: 'Breakfast Pizza',
        picture: 'https://spoonacular.com/recipeImages/Breakfast-Pizza-559251.jpg',
        servings: 6,
        preptime: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Spaghetti Carbonara',
        picture: 'https://spoonacular.com/recipeImages/Spaghetti-Carbonara-535835.jpg',
        servings: 4,
        preptime: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bison Burger',
        picture: 'https://spoonacular.com/recipeImages/Buffalo-Burger-246916.jpg',
        servings: 6,
        preptime: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Crockpot Smoked Sausage & Hash Brown Casserole',
        picture: 'https://spoonacular.com/recipeImages/crockpot-smoked-sausage-hash-brown-casserole-834931.jpg',
        servings: 6,
        preptime: 190,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Restaurant-Style Hashbrown Casserole',
        picture: 'https://spoonacular.com/recipeImages/restaurant-style-hashbrown-casserole-791635.jpg',
        servings: 5,
        preptime: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Winter Detox Moroccan Sweet Potato Lentil Soup (Slow Cooker)',
        picture: 'https://spoonacular.com/recipeImages/winter-detox-moroccan-sweet-potato-lentil-soup-slow-cooker-964239.jpg',
        servings: 8,
        preptime: 375,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Beef Enchiladas',
        picture: 'https://spoonacular.com/recipeImages/beef-enchiladas-2-93877.png',
        servings: 6,
        preptime: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Seafood Spaghetti',
        picture: 'https://spoonacular.com/recipeImages/Seafood-Spaghetti-564981.jpg',
        servings: 2,
        preptime: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chicken Spinoccoli – Breaded Stuffed Chicken Breast With Spinach, Broccoli and Cheese',
        picture: 'https://spoonacular.com/recipeImages/chicken-spinoccoli-breaded-stuffed-chicken-breast-with-spinach-broccoli-and-cheese-485365.jpg',
        servings: 4,
        preptime: 65,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pesto Grilled Shrimp',
        picture: 'https://spoonacular.com/recipeImages/Pesto-Grilled-Shrimp-247969.jpg',
        servings: 4,
        preptime: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pork & Ramen Stir-Fry',
        picture: 'https://spoonacular.com/recipeImages/Pork---Ramen-Stir-Fry-519307.png',
        servings: 4,
        preptime: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Eggplant Parm',
        picture: 'https://spoonacular.com/recipeImages/eggplant-parm-23453.jpg',
        servings: 8,
        preptime: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pork Adobo',
        picture: 'https://spoonacular.com/recipeImages/pork-adobo-113888.jpg',
        servings: 4,
        preptime: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Shrimp and Corn Salad',
        picture: 'https://spoonacular.com/recipeImages/shrimp-and-corn-salad-13423.jpg',
        servings: 8,
        preptime: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Veggie Tacos',
        picture: 'https://spoonacular.com/recipeImages/Veggie-Tacos-247450.jpg',
        servings: 2,
        preptime: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Crispy Baked Asian Chicken Wings',
        picture: 'https://spoonacular.com/recipeImages/Crispy-Baked-Asian-Chicken-Wings-516087.jpg',
        servings: 4,
        preptime: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Salmon With Rice-Florentine',
        picture: 'https://spoonacular.com/recipeImages/salmon-with-rice-florentine-2-85336.jpg',
        servings: 4,
        preptime: 48,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Baked Chicken and Rice',
        picture: 'https://spoonacular.com/recipeImages/baked-chicken-and-rice-36072.jpg',
        servings: 4,
        preptime: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fried Rice My Way',
        picture: 'https://spoonacular.com/recipeImages/fried-rice-my-way-2-100482.jpg',
        servings: 2,
        preptime: 35,
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

    await queryInterface.bulkDelete('ingredients', null, {truncate: true, cascade: true, restartIdentity: true});

    const bulkIngredients = await queryInterface.bulkInsert('ingredients', [
      {
        name: 'canned chickpeas',
        quantity: '1 can',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'red onion',
        quantity: '40 ml',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'parsley',
        quantity: '15 g',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'cilantro',
        quantity: '4 g',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'chickpea flour',
        quantity: '2 Tbsps',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'olive oil',
        quantity: '2 Tbsps',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'plain yogurt',
        quantity: '1 Tbsps',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'kosher salt',
        quantity: '1 tsp',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ground cumin',
        quantity: '1 tsp',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'fresh dill',
        quantity: '1 tsp',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'paprika',
        quantity: '1 tsp',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'allspice',
        quantity: '0.25 tsps',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'cayenne',
        quantity: '0.25 tsps',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'chickpea flour',
        quantity: '2 Tbsps',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'garlic powder',
        quantity: '0.25 tsps',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'fresh dried lemon pepper',
        quantity: '453 g',
        recipeId: bulkRecipes[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'butter',
        quantity: '4 Tbsps',
        recipeId: bulkRecipes[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'heavy cream',
        quantity: '357 ml',
        recipeId: bulkRecipes[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'nutmeg',
        quantity: '1 serving',
        recipeId: bulkRecipes[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'lemon zest',
        quantity: '2 tsps',
        recipeId: bulkRecipes[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'pecorino romano cheese',
        quantity: '100 g',
        recipeId: bulkRecipes[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'black pepper',
        quantity: '1 tsp',
        recipeId: bulkRecipes[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'salt',
        quantity: '1 serving',
        recipeId: bulkRecipes[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'canned lentils',
        quantity: '850 g',
        recipeId: bulkRecipes[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'cooked rice',
        quantity: '474 g',
        recipeId: bulkRecipes[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'fresh parsley',
        quantity: '15 g',
        recipeId: bulkRecipes[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'kosher salt',
        quantity: '1 tsp',
        recipeId: bulkRecipes[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'lemon juice',
        quantity: '1 Tbsp',
        recipeId: bulkRecipes[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'olive oil',
        quantity: '2 Tbsps',
        recipeId: bulkRecipes[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'red onion',
        quantity: '1',
        recipeId: bulkRecipes[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'rice',
        quantity: '4 servings',
        recipeId: bulkRecipes[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'scallions',
        quantity: '2',
        recipeId: bulkRecipes[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'tomato',
        quantity: '1',
        recipeId: bulkRecipes[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {returning: true});
    console.log('bulk insert: ', bulkIngredients);

    await queryInterface.bulkDelete('instructions', null, {truncate: true, cascade: true, restartIdentity: true});

    const bulkInstructions = await queryInterface.bulkInsert('instructions', [
      {
        stepNumber: 1,
        step: 'In a food processor place all the ingredients except the flour for dusting.',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stepNumber: 2,
        step: 'Process until you have a coarse paste.',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stepNumber: 3,
        step: 'Take a generous amount in your hand and roll into a ball. Lightly flatten to form a patty. If you have a slider press, it will work great. Dust patties on either side with garbanzo bean flour (chickpea flour).',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stepNumber: 4,
        step: 'Place on a plate and refrigerate for about 1-2 hours before pan frying. They will firm up in the refrigerator.',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stepNumber: 5,
        step: 'To pan fry: place a small amount of olive oil in a skillet on medium heat. Fry each patty for about 2 minutes on each side or until golden brown.',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stepNumber: 6,
        step: 'Sprinkle with chopped parsley for a decorative touch.',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stepNumber: 7,
        step: 'Serve with yogurt sauce and pita wedges.',
        recipeId: bulkRecipes[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stepNumber: 1,
        step: 'Bring a large pot of water to boil. When the water is boiling, add 1 T of salt along with the pasta to the pot. Stir well. Cook according to package directions or for about 6-7 minutes for fresh pasta (until al dente).',
        recipeId: bulkRecipes[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stepNumber: 2,
        step: 'Put the butter and cream in a large skillet over medium-high heat. Bring to a boil, stirring frequently, until the cream has reduced almost by half.',
        recipeId: bulkRecipes[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stepNumber: 3,
        step: 'Add the nutmeg, lemon zest, black pepper, and salt, to taste. Stir to combine and set aside.',
        recipeId: bulkRecipes[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stepNumber: 5,
        step: 'Add cheese and toss to coat pasta in sauce and cheese. Check seasonings and add more salt and pepper as needed.',
        recipeId: bulkRecipes[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stepNumber: 6,
        step: 'Serve immediately.',
        recipeId: bulkRecipes[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stepNumber: 1,
        step: 'Mix rice with scallions. Set aside.',
        recipeId: bulkRecipes[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stepNumber: 2,
        step: 'In a saucepan over medium heat, saute 1 red onion in olive oil for 3 minutes.',
        recipeId: bulkRecipes[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stepNumber:3,
        step: 'Add lentils, tomato, and salt and cook until heated through, about 2 minutes.',
        recipeId: bulkRecipes[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stepNumber:4,
        step: 'Remove from heat and stir in lemon juice and parsley.',
        recipeId: bulkRecipes[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        stepNumber:5,
        step: 'Serve over the rice.',
        recipeId: bulkRecipes[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {returning: true});
    console.log('bulk insert: ', bulkInstructions);

    await queryInterface.bulkDelete('favorites', null, {truncate: true, cascade: true, restartIdentity: true});

    await queryInterface.removeConstraint('favorites', 'favorites_userId_recipeId_key')

    const bulkFavorites = await queryInterface.bulkInsert('favorites', [
      {
        userId: bulkUsers[0].id,
        recipeId: bulkRecipes[0].id,
        day: 1,        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: bulkUsers[0].id,
        recipeId: bulkRecipes[3].id,
        day: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: bulkUsers[0].id,
        recipeId: bulkRecipes[3].id,
        day: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: bulkUsers[0].id,
        recipeId: bulkRecipes[2].id,
        day: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: bulkUsers[2].id,
        recipeId: bulkRecipes[3].id,
        day: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: bulkUsers[3].id,
        recipeId: bulkRecipes[0].id,
        day: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: bulkUsers[3].id,
        recipeId: bulkRecipes[0].id,
        day: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {returning: true});
    console.log('bulk insert: ', bulkFavorites);
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
