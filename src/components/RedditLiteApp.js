import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class RedditLiteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitles: []
    };
  }
  componentDidMount() {
    axios
      .get('https://www.reddit.com/.json')
      .then(res => {
        const posts = res.data.data.children;
        const titles = [];
        posts.map((post)=> {
          titles.push(post.data.subreddit_name_prefixed);
        })
        this.setState(() => {
          return {
            postTitles: this.state.postTitles.concat(titles)
          }
        })
      })
  }
  render() {
    const title = 'Fantastic Reddit Posts and Where to Find Them';
    const { postTitles: posts } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <a
                href={`https://www.reddit.com/${post}`}>
                {post}
              </a>
            </div>
          )
        })}
      </div>
    )
  }
}