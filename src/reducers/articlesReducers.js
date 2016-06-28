import * as actionTypes from '../constants/actionTypes';

export default function articlesReducer(state=[], action) {
    switch(action.type){
        case actionTypes.LOAD_ARTICLES_SUCCESS:
            return state;
        case actionTypes.CREATE_ARTICLES_SUCCESS:
            return [...state, Object.assign({},action.article)];
        case actionTypes.UPDATE_ARTICLES_SUCCESS:
            return [
                ...state.filter(article => article.id!== action.article.id),
                Object.assign({},action.article)
            ];
        default:
            return state;
    }
}