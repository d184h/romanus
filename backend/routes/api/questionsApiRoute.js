const router = require('express').Router();
const { Question, Theme } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll({
      include: [
        {
          model: Theme,
        },
      ],
    });

    res.json(questions);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
