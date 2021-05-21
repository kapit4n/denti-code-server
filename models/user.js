'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.ClientFile, {
        foreignKey: 'userId'
      })
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthDate: DataTypes.STRING,
    profession: DataTypes.STRING,
    address: DataTypes.STRING,
    diseases: DataTypes.STRING,
    allergies: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};