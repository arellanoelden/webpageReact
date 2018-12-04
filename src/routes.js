import React from 'react';
import { Route } from 'react-router';
import App from './App';
import HomePage from './homepage';

export default (
  <Route path="/" component={App}>
    <Route exact path="/" component={HomePage} />
  </Route>
);
