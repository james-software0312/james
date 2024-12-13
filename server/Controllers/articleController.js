const Article = require('../Models/ArticleModel');

module.exports.InsertArticle = (req, res, next) => {
    const article = new Article({
        user: req.user._id,
        content: req.body.article
    });
    article.save().then(resp => {
        res.json({message: 'Inserted successfully!', success: true});
    }).catch(err => {
        return res.json({message: 'Server Error!', success: false})
    })
}

module.exports.getArticles = (req, res) => {
    const articles = Article.find()
        .populate('user')
        .then(resp => {
            console.log(resp);
        return res.json(resp);
    })
}