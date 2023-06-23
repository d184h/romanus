const router = require("express").Router();
const { Theme, Question } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const themes = await Theme.findAll({
      include: {
        model: Question,
      },
    });

    res.json(themes);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
