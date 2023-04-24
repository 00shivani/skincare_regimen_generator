const User = require('./User');
const SkinType = require('./SkinType');
const Products = require('./Products')

User.hasMany(SkinType, {
  foreignKey: 'skinType'
 
});

SkinType.hasMany(Products, {
  foreignKey: 'skin_id'
 
});

Products.belongsTo(SkinType, {
  foreignKey: 'skin_id'
});

module.exports = { User, SkinType, Products};
