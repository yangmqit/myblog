var express = require('express');
var router = express.Router();

/* GET  blog page. */
router.get('/', function(req, res) {
    res.render('blog/blogs', { title: '技术博客 - 杨明全的网站' });
});

module.exports = router;
