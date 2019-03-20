import React from 'react';
import axios from 'axios';
import Card from './Card';
import { Link } from 'react-router-dom';

class Posts extends React.Component {
  signal = axios.CancelToken.source();
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  componentDidMount() {
    const { id: subReddit } = this.props.match.params;
    console.log(subReddit);
    axios
    .get(`https://www.reddit.com/r/${subReddit}.json`, { cancelToken: this.signal.token })
    .then(res =>
      res.data.data.children.slice(0, 25).map(post => ({
        postedAt: post.data.created_utc,
        postedBy: post.data.author,
        title: post.data.title,
        url: post.data.url,
      }))
    )
    .then(posts => {
      this.setState(() => ({ posts }));
    })
    .catch(error => {
      if (axios.isCancel(error)){
        console.log('Error: ', error.message);
      } else {
        this.setState({loading: false, error});
      }
    })
  }
  componentWillUnmount() {
    this.signal.cancel('Api is being cancelled');
  }
  render(){
    const { posts } = this.state;
    console.log(this.state)
    return (
      <div>
        <p>Testing!</p>
        {
          posts && posts.map((post, index) => (
            <Card key={index} {...post}/>
          ))
        }
      </div>
    )
  }
}

export default Posts;