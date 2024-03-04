'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Doctors', [{
      firstName: 'Walter',
      lastName: 'White',
      email: 'walter@hb.com',
      speciality: 'Doctor',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Doctors', null, {});

  }
};
