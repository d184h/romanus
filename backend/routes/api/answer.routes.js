const router = require('express').Router();
const { Question } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const animals = await Question.findAll({
      raw: true,
    });
    res.json(animals);
  } catch ({ message }) {
    res.json({ message });
  }
});
module.exports = router;
