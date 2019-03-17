import React from 'react';

const Card = (props) => (
  <div>
    <p>This is a Card with a subReddit id of {props.match.params.id}</p>
  </div>
);

export default Card;