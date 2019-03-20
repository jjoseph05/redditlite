import React from 'react';
import axios from 'axios';

export default class HomePage extends React.Component {
  signal = axios.CancelToken.source();

  constructor(props) {
    super(props);
    this.state = {
      postTitles: [],
      loading: true
    };
  }
  componentDidMount() {

    axios
      .get('https://www.reddit.com/.json', { cancelToken: this.signal.token })
      .then(res => {
        const posts = res.data.data.children;
        const titles = [];
        posts.map((post)=> {
          titles.push(post.data.subreddit);
        })
        this.setState(() => {
          return {
            loading: false,
            postTitles: this.state.postTitles.concat(titles)
          }
        })
      })
      .catch(error => {
        if (axios.isCancel(error)){
          console.log('Error: ', error.message);
        } else {
          console.log('error');
          this.setState({loading: false});
        }
      })
  }
  componentWillUnmount() {
    this.signal.cancel('Api is being cancelled');
  }
  render() {
    const title = 'Fantastic Reddit Posts and Where to Find Them';
    const { postTitles: posts } = this.state;
    if (!this.state.loading) {
    return (
      <div>
        <h1>{title}</h1>
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <a
                href={`/r/${post}`}>
                {post}
              </a>
            </div>
          )
        })}
      </div>
    )} else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }
  }
}