import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from './Card';

class Posts extends React.Component {
  signal = axios.CancelToken.source();

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
      loading: true
    };
  };

  getSubreddits = (subReddit, postLimit) => {
    axios
      .get(`https://www.reddit.com/r/${subReddit}.json`, { cancelToken: this.signal.token })
      .then(res =>
        res.data.data.children.slice(0, postLimit || res.length).map(post => ({
          postedAt: post.data.created_utc,
          postedBy: post.data.author,
          title: post.data.title,
          url: post.data.url,
          thumbnail: post.data.thumbnail || ''
        }))
      )
      .then(posts => {
        this.setState(() => ({ loading: false, posts }));
      })
      .catch(error => {
        if (axios.isCancel(error)){
          console.log('Error: ', error.message);
        } else {
          this.setState({ loading: false, error });
        }
      });
  };

  componentDidMount() {
    const { id: subReddit } = this.props.match.params;
    this.getSubreddits(subReddit, 25);
    this.interval = setInterval(() => {
      this.getSubreddits(subReddit);
    }, 10000);

  };

  componentWillUnmount() {
    clearInterval(this.interval);
    this.signal.cancel('Preventing Memory Leak, Api is being cancelled');
  };

  componentDidUpdate(prevProps, prevState) {
    const prevLength = prevState.posts.length;
    const currentLength = this.state.posts.length;

    if (prevState.posts.length > 0 &&
      (prevState.posts[prevLength - 1].url !== this.state.posts[currentLength - 1].url)) {
      this.setState(() => { posts: this.state.posts })
    }
  };

  render() {
    const { loading, posts } = this.state;
    const { id: subRedditTitle } = this.props.match.params;

    return (
      <div style={{ backgroundColor: "#DAE0E6" }}>
      { loading && (
        <div style={{ opacity: loading ? 0.5 : 1, textAlign: "center" }}>
          <p>Loading!</p>
        </div>
      ) || (
          <div>
            <div style={{ textAlign: "center", padding: "1em 0", boxShadow: "0 8px 6px -8px #999" }}>
              <span>
                <Link to={"/"}>Home/</Link>
              </span>
              <span>r/{subRedditTitle}</span>
            </div>
            {
              posts && posts.map((post, index) => (
                <Card key={index} {...post}/>
              ))
            }
          </div>
        )
      }
      </div>
    )
  }
}

export default Posts;