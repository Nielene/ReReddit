import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { fetchSubredditPosts } from '../../actions/subredditActions';
import '../../css/subreddits/SingleSubredditPosts.css';


// import Comments from '../components/Comments'

// {/*
//   const postItems = this.props.posts.filter(post => {
//     return post.my_subreddit_title.toLowerCase() === (state.posts.items.my_subreddit_title.toLowerCase())
// //   */}

class SingleSubredditPosts extends Component {

  componentDidMount() {
    console.log('this.props.match.params.id', this.props.match.params.subreddit_id);
    // debugger
    this.props.fetchSubredditPosts(this.props.match.params.subreddit_id)
  }

  render () {
    console.log('SingleSubredditPosts.js: this.props.posts', this.props.posts);

    const subredditTitle = <Link to={'/subredditPosts/' + this.props.subredditPosts.subreddit_id}><h6>{this.props.subredditPosts.my_subreddit_title}</h6></Link>

    const postItems = this.props.subredditPosts.map(post => (

      <div key={post.id} className ='eachPostItemDiv'>
        <div className='postItemCount'>
          <h3> # </h3>
        </div>

        <div className='postItemVotes'>
          <h3>{Math.floor(Math.random() * 10000)}</h3>
        </div>
        <div className='postItemImage'>
          <img src={post.image_url} alt='' height='42' width='42' />
        </div>

        <div className='postItemBody'>
          <Link to={'/post/'+ post.id}> <p>{post.post_title}</p> </Link>
          <h6>submitted {Math.floor(Math.random() * 24)} hours ago by <Link to=''>**USER**</Link> to <Link to={'/subredditPosts/' + post.subreddit_id}>{post.my_subreddit_title}</Link></h6>
        </div>

      </div>
    ))


    return (
      <div>

        <div>
          SUBREDDIT TITLE HERE!!!!!!!!!!{subredditTitle}
          {postItems}
        </div>
      </div>
    )
  }

}


const mapStateToProps = state => ({
  subredditPosts: state.subreddits.subredditPosts,
  // my_subreddit_title: state.posts.items
})

const mapDispatchToProps = dispatch => {
  return {
    fetchSubredditPosts: (id) => dispatch(fetchSubredditPosts(id))
  }
}

// export default connect(mapStateToProps, {fetchSinglePost})(SinglePost);
export default connect(mapStateToProps, mapDispatchToProps)(SingleSubredditPosts);

//---------------------------



// <div className='inOneLine'>
  // <Link to={'/subredditPosts/' + post.subreddit_id}><h6>{post.my_subreddit_title}</h6></Link>
// </div>





  // handleSubmit = (event) => {
  //     event.preventDefault()
  //     let SearchResult = this.state.allPeople.filter(person => {
  //       // return person.name.toLowerCase() === (this.state.searchInput.toLowerCase())
  //       return person.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
  //     })
  //     this.setState({
  //       searchInput: '',
  //       selectedPerson: SearchResult
  //     })
  //     // console.log('selectedPerson', this.state.selectedPerson);
  //   }



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
