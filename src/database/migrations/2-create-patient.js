'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      treatmentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'treatment_id',
        references: {
          model: 'Treatments',
          key: 'id'
        }
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Patients');
  }
};
