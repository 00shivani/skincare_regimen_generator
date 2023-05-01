const User = require('./User');
const quizData = require('./quizData');
const Products = require('./Products')

// User.hasMany(SkinType, {
//   foreignKey: 'skinType'
 
// });

// SkinType.hasMany(Products, {
//   foreignKey: 'skin_id'
 
// });

Products.belongsTo(quizData, {
  foreignKey: 'skin_id'
});

module.exports = { User, quizData, Products};
