import React from 'react';

const Card = ({postedAt, postedby, title, url} = {}) => (
  <div>
    <p>{postedAt}</p>
    <p>{postedby}</p>
    <p>{title}</p>
    <p>{url}</p>
  </div>
);
export default Card;
