import {combineReducers} from 'redux';
import initialState from './initialState';
import articles from './articlesReducer';

const rootReducer = combineReducers({
    articles,
    initialState
});

export default rootReducer;