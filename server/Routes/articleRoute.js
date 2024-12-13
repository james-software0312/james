const {InsertArticle, getArticles} = require('../Controllers/articleController');
const { userVerification } = require('../Middlewares/AuthMiddleware')

const router = require('express').Router();

router.post('/article/insert', [userVerification], InsertArticle );
router.get('/article/getArticles', getArticles);

module.exports = router;