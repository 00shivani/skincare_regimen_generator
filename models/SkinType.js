const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SkinType extends Model {}

SkinType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    skinType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skinConcerns:{
      type: DataTypes.STRING
    },
    timeOfDay: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id',
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'skinType',
  }
);

module.exports = SkinType;
