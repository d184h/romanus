const router = require('express').Router();

const questionsApiRouter = require('./api/questionsApiRoute');
const themesApiRouter = require('./api/themesApiRoute');

router.use('/api/questions', questionsApiRouter);
router.use('/api/themes', themesApiRouter);

module.exports = router;
