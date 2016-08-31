import React from 'react';
import { render } from 'react-dom';

import App from './components/app';
import ListClub from './components/listClub';
import Club from './components/club';
import ClubForm from './components/clubForm';

import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';

import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={ListClub} ></IndexRoute>
        <Route path="/club/:clubId" component={Club}></Route>
        <Route path="/create" component={ClubForm}></Route>
      </Route>
    </Router>
  </Provider>
);

render(
  router, document.getElementById('app')
);
