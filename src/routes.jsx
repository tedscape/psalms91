import React from 'react';
import {
    Route,
    Router,
    browserHistory,
} from 'react-router';
import {
  HomePage,
  SearchPage,
  // NotFoundPage,
} from './containers/pages';

const routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomePage} />
    <Route path="Home" component={HomePage} />
    <Route path="Search" component={SearchPage} />
  </Router>
);
export default routes;
// <Route path="*" component={NotFoundPage} status={404} />
