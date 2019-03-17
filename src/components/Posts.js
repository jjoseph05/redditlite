import React from 'react';
import { Link } from 'react-router-dom';

const Posts = (props) => (
  <div>
    <Link to="r/1">Item One</Link>
    <Link to="r/2">Item Two</Link>
  </div>
);

export default Posts;