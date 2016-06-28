import * as actionTypes from '../constants/actionTypes';
import ArticlesApi from '../api/ArticlesApi';


export function loadArticlesSuccess(articles){
    return {type: actionTypes.LOAD_ARTICLES_SUCCESS, articles};
}
export function loadArticles(){
    return function(dispatch){
        return ArticlesApi.getAll().then(articles=>{
                    dispatch(loadArticlesSuccess(articles));
                }).catch(error=>{
                    throw(error);
                });
    };
}
