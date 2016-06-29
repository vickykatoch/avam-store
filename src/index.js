import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadArticles} from './actions/articleActions';

let store = configureStore();
store.dispatch(loadArticles());

render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
   document.getElementById('articleStore')
);