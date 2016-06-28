import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import ArticlesPage from './components/articles/ArticlesPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="articles" component={ArticlesPage}/>
    </Route>
);


