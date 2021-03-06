'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ClientFile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Record, {
        foreignKey: 'fileId'
      })

      this.belongsTo(models.Patient, {
        foreignKey: 'patientId',
        onDelete: 'CASCADE'
      });
    }
  };
  ClientFile.init({
    patientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ClientFile',
  });
  return ClientFile;
};
