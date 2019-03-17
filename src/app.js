import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('app')
);


//Posts
  // **Navigate to and view any subreddit
  // **Display 25 posts @ a time
  // **Feature of own...
  // **Refresh posts every Minute -> Preserve scroll position
    //SubReddits
      //Title -> links to post || site
      //Link to the comments
      //Username: submittedBy
      //TimeStamp: postedAt
