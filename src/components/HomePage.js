import React from 'react';
import axios from 'axios';
import Search from './Search';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const PostsStyles = {
  background: '#DAE0E6',
  margin: 0,
  padding: '25px 0 25px 0',
  listStyle: {
    display: 'flex',
    justifyContent: "space-between",
    background: '#FFFFFF',
    fontSize: "20px",
    margin: 'auto',
    marginBottom: 10,
    width: '30%',
    padding: 10,
    borderRadius: 5,
    listStyle: 'none',
    fontWeight: "bold"
  }
}

const newStyles = {
  "& .popularPostsList": {
    background: '#DAE0E6',
    margin: 0,
    padding: '25px 0 25px 0',
  },
  "& .popularPostItem": {
    display: 'flex',
    justifyContent: "space-between",
    background: '#FFFFFF',
    fontSize: "20px",
    margin: 'auto',
    marginBottom: 10,
    width: '30%',
    padding: 10,
    borderRadius: 5,
    listStyle: 'none',
    fontWeight: "bold",
    ":hover": {
      boxShadow: "0 0 5px grey"
    }
  }
};

const StyledDiv = styled.div`${newStyles}`;
const PopularPosts = (props) => (
  <StyledDiv>
    <ul className="popularPostsList">
      {props.posts.map((post, index) => (
          <li className="popularPostItem" key={index}>
            <Link
              style={{textDecoration: "none"}}
              to={`/r/${post.title}`}>
              {post.title}
            </Link>
            <span>{post.ups}</span>
          </li>
        )
      )}
    </ul>
  </StyledDiv>
);