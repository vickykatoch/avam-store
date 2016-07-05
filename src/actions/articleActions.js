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
export function saveArticleSuccess(article,type){
    return { type, article };
}

export function saveArticle(article){
    return function (dispatch) {
        return ArticlesApi.saveArticle(article)
            .then(a=>{
                let atype = article.id===0 ? actionTypes.CREATE_ARTICLES_SUCCESS : actionTypes.UPDATE_ARTICLES_SUCCESS;
                dispatch(saveArticleSuccess(a,atype));
            })
            .catch(error=> { 
                throw(error);
            });
    };
}
export function newArticle(){
    return {
        id: 0,
        title: '',
        description: '',
        author :  '',
        publishDate :null,
        loadedDate :  null
    };
}