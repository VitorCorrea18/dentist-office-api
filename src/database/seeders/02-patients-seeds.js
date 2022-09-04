
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Patients',
      [
        {
          name: 'Fulana Pereira',
          treatment_id: 1
        },
        {
          name: 'Ayrton Senna',
          treatment_id: 2,
        },
        {
          name: 'Dino Sauro',
          treatment_id: 2
        },
        {
          name: 'Mona Liza',
          treatment_id: 4
        },
        {
          name: 'Cristiano Ronaldo',
          treatment_id: 5
        },
        {
          name: 'Ronaldinho Gaúcho',
          treatment_id: 4
        },
        {
          name: 'Robinho',
          treatment_id: 6
        },
        {
          name: 'Neymar Junior',
          treatment_id: 4
        },
        {
          name: 'Gilberto Gil',
          treatment_id: 4
        },
        {
          name: 'Napoleão Bonaparte',
          treatment_id: 5
        },
        {
          name: 'Julio Cesar',
          treatment_id: 2
        },
        {
          name: 'Michael Jackson',
          treatment_id: 4
        },
        {
          name: 'Pelé',
          treatment_id: 3
        },
        {
          name: 'Dom Pedro',
          treatment_id: 5
        },
        {
          name: 'Cicrana Silva',
          treatment_id: 3
        },
        {
          name: 'Juventino Leôncio',
          treatment_id: 2
        },
        {
          name: 'João Ninguém',
          treatment_id: 1
        },
        {
          name: 'Maria Betânia',
          treatment_id: 1
        },
        {
          name: 'Ivete Sangalo',
          treatment_id: 4
        },
        {
          name: 'Lorivaldo Acunha',
          treatment_id: 3
        }
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Patients', null, {});
  },
};
