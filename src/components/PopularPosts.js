import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const popularPostStyles = {
  "& .popularPostsList": {
    background: '#DAE0E6',
    margin: 0,
    padding: '25px 0 25px 0',
    fontFamily: 'Rubik'
  },
  "& .popularPostItem": {
    display: 'flex',
    justifyContent: "space-between",
    background: '#FFFFFF',
    fontSize: "20px",
    margin: 'auto',
    marginBottom: 10,
    width: '50%',
    padding: ".5em 1em",
    listStyle: 'none',
    fontWeight: 300,
    ":hover": {
      outline: "1px solid grey"
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
            <span>{post.ups} &#10514;</span>
          </li>
        )
      )}
    </ul>
  </StyledDiv>
);

export default PopularPosts;
