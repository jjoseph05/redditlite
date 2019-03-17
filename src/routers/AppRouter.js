import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RedditLiteApp from '../components/RedditLiteApp';
import NotFound from '../components/NotFound';
import Posts from '../components/Posts';
import Card from '../components/Card';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={RedditLiteApp}/>
        <Route exact path="/r" component={Posts}/>
        <Route path="/r/:id" component={Card}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
