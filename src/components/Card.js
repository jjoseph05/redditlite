import React from 'react';
import styled from 'styled-components';

const cardStyles = {
  background: 'lightblue',
  border: '1px solid black',
  borderRadius: 5,
  color: 'black',
  padding: '1.5em',
  width: '70%',
  margin: '1.5em auto',
  display: "flex",
  flexDirection: "column"
};

const StyledDiv = styled.div`${cardStyles}`;
const Card = ({postedAt, postedBy, title, url, thumbnail} = {}) => (
  <StyledDiv>
    <p>Posted by u/{postedBy} @ {postedAt}</p>
    <a style={{marginBottom: 10}}href={url}>{title}</a>
    {thumbnail !== 'self' &&
      <img style={{maxWidth: "240px", height: "auto"}} src={thumbnail}/>}
    <a href={url}>Comments</a>
  </StyledDiv>
);

export default Card;

