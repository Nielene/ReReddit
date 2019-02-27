const { db } = require('../index.js');

const getAllPosts = (req, res, next) => {
  db.any(
    'SELECT * FROM posts'
  )
  .then(posts => {
    res.status(200).json({
      status: 'success',
      posts: posts,
      message: 'All Posts Received!'
    })
  })
  .catch(err => next(err));
}

const getAllPostsfromSingleSubreddit = (req, res, next) => {
  let my_subreddit_title = req.params.my_subreddit_title;
  db.any(
    "SELECT * FROM posts WHERE my_subreddit_title =$1", [my_subreddit_title]
  )
  .then(posts => {
    res.status(200).json({
      status: 'success',
      posts: posts,
      message: 'ALL POSTS FROM THIS SUBREDDIT!'
    })
  })
  .catch(err => {
    res.status(400)
    .json({
      status: 'error',
      message: 'YOU ARE NOT GETTING ALL POSTS FROM THIS SUBREDDIT!'
    })
    console.log(err);
    next();
  });
}

const createNewPostInSingleSubreddit = (req, res, next) => {

  let queryString = "INSERT INTO posts ";

  if (req.body.image_url) {
    queryString +=   "(image_url, post_title, my_subreddit_title) VALUES(${image_url}, ${post_title}, ${my_subreddit_title} )"
  } else if (req.body.post_body) {
    queryString +=   "(post_body, post_title, my_subreddit_title) VALUES(${post_body}, ${post_title}, ${my_subreddit_title} )"
  }

  db.none(queryString, req.body)
  // db.none("INSERT INTO posts(post_title, post_body, image_url, my_subreddit_title ) VALUES( ${post_title}, ${post_body}, ${image_url}, ${my_subreddit_title} )",
  //   req.body)
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'NEW POST CREATED IN A SINGLE SUBREDDIT!',
      body: req.body,
    })
  })
  .catch(err => next(err));
}


const deleteOwnPost = (req, res, next) => {
  let post_id = parseInt(req.params.id);
  db.result('DELETE FROM posts WHERE posts.id =$1', [post_id])
  .then(result => {
    res.status(200).json({
      status: 'success',
      message: 'You DELETED this post.'
    })
  }).catch(err => {
    res.status(400).json({
      status: 'error',
      message: 'You did NOT delete any Post.'
    })
    console.log(err);
    next();
  })
}

module.exports = { getAllPosts, getAllPostsfromSingleSubreddit, createNewPostInSingleSubreddit, deleteOwnPost }