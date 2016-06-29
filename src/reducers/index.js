import {combineReducers} from 'redux';
import initialState from './initialState';
import articles from './articlesReducers';

const rootReducer = combineReducers({
    articles,
    initialState
});

export default rootReducer;