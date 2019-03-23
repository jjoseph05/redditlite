import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const cardStyles = {
  background: '#fff',
  color: '#444',
  padding: '1.5em',
  width: '50%',
  margin: '1.5em auto',
  display: "flex",
  flexDirection: "column",
  "a": {
    color: 'rgb(0, 121, 211)',
    " :hover" : {
      color: 'rgb(63, 154, 222)'
    }
  }
};

const StyledDiv = styled.div`${cardStyles}`;
const Card = ({postedAt, postedBy, title, url, thumbnail} = {}) => (
  <StyledDiv>
    <p style={{ fontSize: ".8em", fontWeight: 200 }}>posted by: u/{postedBy} @ {moment().utc(postedAt).format('HH:mm | YYYY/MM/DD')}</p>
    <a style={{ marginBottom: "1em", fontSize: "1.5em", fontWeight: 700 }}href={url}>{title}</a>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
      {thumbnail !== 'self' &&
        <img style={{ maxWidth: "240px", height: "auto", order: 2 }} src={thumbnail}/>}
      <a style={{ order: 1 }} href={url}>Comments &#128172;</a>
    </div>
  </StyledDiv>
);

export default Card;

