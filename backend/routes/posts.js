let express = require('express');
let router = express.Router();
const { getAllPosts, getSinglePost, getAllPostsfromSingleSubreddit, createNewPostInSingleSubreddit, deleteOwnPost } = require('../db/queries/postsQueries');

// const db = require('../db/postsQueries');
// router.get('/', db.getAllPosts);

//getSomeRandomPosts
// router.post('/submit?selftext=true')

router.get('/', getAllPosts );
router.get('/singlePost/:id', getSinglePost);
router.get('/:subreddit_title/', getAllPostsfromSingleSubreddit );
router.post('/', createNewPostInSingleSubreddit);
router.delete('/:post_id', deleteOwnPost);

module.exports = router;
