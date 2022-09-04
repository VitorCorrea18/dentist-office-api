'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Installments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      patientId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'patient_id',
        references: {
          model: 'Patients',
          key: 'id'
        }
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Installments');
  }
};
