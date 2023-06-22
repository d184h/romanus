const router = require("express").Router();
const { Theme } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const themes = await Theme.findAll();

    res.json(themes);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
