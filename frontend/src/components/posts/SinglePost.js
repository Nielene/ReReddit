import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSinglePost } from '../../actions/postActions';

import Comments from '../comments/Comments'
import '../../css/posts/SinglePost.css';


class SinglePost extends Component {
  // console.log('SinglePost.js: display single post');
  // console.log('@', props, props.post)
  // const post = props.post;
  componentDidMount() {
    // this.props.fetchSinglePost(this.props.match.params.id);
    // fetchSinglePost(this.props.match.params.id)
    this.props.fetchSinglePost(this.props.match.params.id)
  }

  render() {
    console.log('PARAMS??', this.props)
    console.log('PARAMS??2', this.props.post)
    console.log('PARAMS??3', this.props.match.params.id)

    // return (
    //   <div>single post</div>
    // )

    if (this.props.post.id) {
      return (
        <div >
          <div className='eachPostItemDiv'>

            <div className='postItemVotes'>
              <h3>{Math.floor(Math.random() * 10000)}</h3>
            </div>

            <div className='postItemImage'>
              <img src={this.props.post.image_url} alt='' height='50' width='50' />
            </div>

            <div className='postItemBody'>
              <h2><Link to=''>{this.props.post.post_title}</Link></h2>
              <h5>{ 'submitted ' + Math.floor(Math.random() * 24) + ' hours ago by ' } <Link to=''>**USER**</Link> </h5>

              <div>
                <Link to=''> <h6>{Math.floor(Math.random() * 1000)} comments</h6> </Link>
              </div>

            </div>

            <div className='enlargedPostImage'>
              <img src={this.props.post.image_url} alt='' height='50' width='50' />
            </div>
            
          </div>


          <div className='commentsComponentDiv'>
            <Comments />
          </div>

        </div>
      )
    } else {
      return (
        <div>Single post is not displaying</div>
      )
    }
  }
}


const mapStateToProps = state => ({
  post: state.posts.item
})

const mapDispatchToProps = dispatch => {
  return {
    // fetchSinglePost: () => dispatch(fetchSinglePost)
    // fetchSinglePost: (id) => dispatch(fetchSinglePost(this.props.match.params.id))
    fetchSinglePost: (id) => dispatch(fetchSinglePost(id))
  }
}


// export default connect(mapStateToProps, {fetchSinglePost})(SinglePost);
export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);

//---------------------------

// if(!!post) {
//   return (
//     // <div key={post.id}>
//     //   <h1>Single Post</h1>
//     //   <Link to={'/post/'+ post.image_url}>{post.post_title}</Link>
//     //   <p>{post.image_url}</p>
//     //   <p>{post.post_body}</p>
//     //   <p>{post.my_subreddit_title}</p>
//     //   <p>{Math.floor(Math.random() * 24) + ' hours ago'} </p>
//     //   <p>votes: {Math.floor(Math.random() * 10000)}</p>
//     // </div>
//     <div>single post</div>
//   )
// } else {
//   return (
//     <h2>Single Post not displaying </h2>
//   )
//   // return null;
// }