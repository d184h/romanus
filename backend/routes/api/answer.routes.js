const router = require('express').Router();
const { Answer } = require('../../db/models');

router.post('/:questId', async (req, res) => {
  try {
    const { questId } = req.params;

    const { answer } = req.body;
    const user_id = req.session.userId;

    const result = await Answer.create({
      answer,
      question_id: questId,
      user_id,
    });
    res.json(result);
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
