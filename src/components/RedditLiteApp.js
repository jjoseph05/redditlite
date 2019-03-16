import React from 'react';

export default class RedditLiteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  render() {
    const title = 'Fantastic Reddit Posts and Where to Find Them';

    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }
}