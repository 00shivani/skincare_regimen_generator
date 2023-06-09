const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class quizData extends Model {
  getSummary() {
    // Get a summary of the quiz data
  }
}

quizData.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    skintype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skinconcerns:{
      type: DataTypes.STRING
    },
    ingredients: {
      type: DataTypes.STRING,
    },
    // date_created: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: DataTypes.NOW,
    // }
  
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
    modelName: 'quizData',
  }
);

module.exports = quizData;
