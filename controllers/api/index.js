const router = require('express').Router();

const userRoutes = require('./userRoutes');
const quizRoute = require('./quizRoute');

console.log(quizRoute);

router.use('/users', userRoutes);
router.use('/quiz', quizRoute);

module.exports = router;

