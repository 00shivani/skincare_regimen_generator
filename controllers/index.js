const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// const quizRoute = require('./quizRoute');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/quiz', quizRoute);

module.exports = router;
