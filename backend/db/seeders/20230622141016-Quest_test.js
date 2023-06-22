/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const questData = [
      {
        theme_id: 1,
        question: 'Это вопрос 1 темы',
        count: 100,
        trueAnswer: 'ответ',
      },
      {
        theme_id: 1,
        question: 'Это вопрос 1 темы',
        count: 100,
        trueAnswer: 'ответ',
      },
      {
        theme_id: 1,
        question: 'Это вопрос 1 темы',
        count: 100,
        trueAnswer: 'ответ',
      },
      {
        theme_id: 1,
        question: 'Это вопрос 1 темы',
        count: 100,
        trueAnswer: 'ответ',
      },
      {
        theme_id: 1,
        question: 'Это вопрос 1 темы',
        count: 100,
        trueAnswer: 'ответ',
      },
      {
        theme_id: 2,
        question: 'Это вопрос 2 темы',
        count: 100,
        trueAnswer: 'ответ',
      },
      {
        theme_id: 2,
        question: 'Это вопрос 2 темы',
        count: 100,
        trueAnswer: 'ответ',
      },
      {
        theme_id: 2,
        question: 'Это вопрос 2 темы',
        count: 100,
        trueAnswer: 'ответ',
      },
      {
        theme_id: 2,
        question: 'Это вопрос 2 темы',
        count: 100,
        trueAnswer: 'ответ',
      },
      {
        theme_id: 2,
        question: 'Это вопрос 2 темы',
        count: 100,
        trueAnswer: 'ответ',
      },
      {
        theme_id: 3,
        question: 'Это вопрос 3 темы',
        count: 100,
        trueAnswer: 'ответ',
      },
      {
        theme_id: 3,
        question: 'Это вопрос 3 темы',
        count: 100,
        trueAnswer: 'ответ',
      },
      {
        theme_id: 3,
        question: 'Это вопрос 3 темы',
        count: 100,
        trueAnswer: 'ответ',
      },
      {
        theme_id: 3,
        question: 'Это вопрос 3 темы',
        count: 100,
        trueAnswer: 'ответ',
      },
      {
        theme_id: 3,
        question: 'Это вопрос 3 темы',
        count: 100,
        trueAnswer: 'ответ',
      },
    ];
    const quests = questData.map((quest) => ({
      ...quest,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Questions', quests);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions');
  },
};
