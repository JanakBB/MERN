let {posts} = require('../data')


function getPost(req, res) {
    res.send(posts);
}




module.exports = {getPost};