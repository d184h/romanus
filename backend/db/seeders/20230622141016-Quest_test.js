/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const questData = [
      {
        theme_id: 1,
        question:
          'https://img.kupigolos.ru/hero/6084e67e2213c.jpg?p=bh&s=a61b5c33322396287defbf408b5e21db',
        count: 100,
        trueAnswer: 'frontend/public/logo192.png',
      },
      {
        theme_id: 1,
        question: 'https://www.kino-teatr.ru/acter/album/500313/1188409.jpg',
        count: 200,
        trueAnswer: 'Софа',
      },
      {
        theme_id: 1,
        question:
          'https://blog.studylie.ru/wp-content/uploads/2019/09/bodrov.jpg',
        count: 300,
        trueAnswer: 'Игорь',
      },
      {
        theme_id: 1,
        question:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/1ca608ce-0a61-49ab-aa3a-0fe335403051/220x330',
        count: 500,
        trueAnswer: 'Толя',
      },
      {
        theme_id: 1,
        question:
          'https://static.independent.co.uk/2022/01/12/13/newFile-5.jpg',
        count: 1000,
        trueAnswer: 'Гоша',
      },
      {
        theme_id: 2,
        question: 'Любимое блюдо Гагика',
        count: 100,
        trueAnswer: 'Бургер',
      },
      {
        theme_id: 2,
        question: 'Любимый алкогольный напиток Гагика',
        count: 200,
        trueAnswer: 'Пиво',
      },
      {
        theme_id: 2,
        question: 'Любимое животное Гагика',
        count: 300,
        trueAnswer: 'Баран',
      },
      {
        theme_id: 2,
        question: 'Любимый фильм Гагика',
        count: 500,
        trueAnswer: 'Дневники вампира',
      },
      {
        theme_id: 2,
        question: 'Что Гагик любит делать больше всего?',
        count: 1000,
        trueAnswer: 'Тусить',
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
