import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './App';
import Home from './Home';
import Settings from './Settings';
import Reddit from './Reddit';
import './index.css';

var routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="settings" component={Settings} />
            <Route path="reddit/:subreddit" component={Reddit} />
        </Route>
    </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
