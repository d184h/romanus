/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const themesData = [
      {
        name: 'Название темы 1',
      },
      {
        name: 'Название темы 2',
      },
      {
        name: 'Название темы 3',
      },
    ];
    const themes = themesData.map((them) => ({
      ...them,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Themes', themes);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes');
  },
};
