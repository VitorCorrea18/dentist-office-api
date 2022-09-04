module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Treatments',
      [
        {
          name: 'Clareamento dentário',
          price: 1200.00
        },
        {
          name: 'Implante dentário',
          price: 1800.00
        },
        {
          name: 'Limpeza',
          price: 130.00
        },
        {
          name: 'Aparelho ortodôntico',
          price: 2500.00
        },
        {
          name: 'Tratamento de Canal',
          price: 620.00
        },
        {
          name: 'Extração de dente',
          price: 550.00
        }
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Treatments', null, {});
  },
};
