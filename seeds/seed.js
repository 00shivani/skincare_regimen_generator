const sequelize = require('../config/connection');
const {User, quizData, Products} = require('../models');

const userData = require('./userData.json');
const productsData = require('./productsData.json');
const skinTypes = require('./skinTypes.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const productInfo = await Products.bulkCreate(productsData);

  const skinInfo = await SkinType.bulkCreate(skinTypes);

  
  process.exit(0);
};

seedDatabase();
