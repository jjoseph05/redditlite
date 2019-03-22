import React from 'react';
import axios from 'axios';
import Search from './Search';
import PopularPosts from './PopularPosts';

export default class HomePage extends React.Component {
  signal = axios.CancelToken.source();

  constructor(props) {
    super(props);
    this.state = {
      postTitles: [],
      loading: true
    };
  }

  getPosts = () => {
    axios
    .get('https://www.reddit.com/.json', { cancelToken: this.signal.token })
    .then(res => {
      const posts = res.data.data.children;
      const titles = [];
      posts.map((post) => {
        titles.push({
          title: post.data.subreddit,
          ups: post.data.ups
        });
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

  componentDidMount() {
    this.getPosts()
  }
  componentWillUnmount() {
    this.signal.cancel('Api is being cancelled');
  }
  render() {
    const title = 'Fantastic Reddit Posts and Where to Find Them';
    const { loading, postTitles: posts } = this.state;

    return (
      <div>
        <Search history={this.props.history}/>
        {
          !loading && (
            <div>
              <div style={{ textAlign: "center" }}>
                <h1>{title}</h1>
              </div>
              <PopularPosts posts={posts}/>
            </div>
          ) || (
            <div>
              <h1>Loading...</h1>
            </div>
          )
        }
      </div>
    )
  }
}
