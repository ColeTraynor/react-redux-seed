import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { IndexRedirect, Redirect, Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from './store';
import routeConfig from './routes';
import { App } from './components';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to={routeConfig.index}/>
        {
          routeConfig.routes.map((route, index) => {
            return <Route key={index} path={route.path} component={route.component} />;
          })
        }
        <Redirect from='*' to='/'/>
      </Route>
    </Router>
  </Provider>,

  document.getElementById('root')
);
