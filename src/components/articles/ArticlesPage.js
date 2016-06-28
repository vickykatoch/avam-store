import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as articleActions from '../../actions/articleActions';

export default class ArticlesPage extends React.Component{
    render(){
        return (
            <h1>Article Store</h1>
        );
    }
}

/*
ArticlesPage.propTypes = {
    articles : React.PropTypes.array.isRequired,
    actions : React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        articles : state.articles
    };
}
function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators(articleActions, dispatch)
    };
}
connect(mapStateToProps, mapDispatchToProps)(ArticlesPage);
*/