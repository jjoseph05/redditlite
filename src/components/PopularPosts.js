import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const popularPostStyles = {
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

const StyledDiv = styled.div`${popularPostStyles}`;
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

export default PopularPosts;
