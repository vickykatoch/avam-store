import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as articleActions from '../../actions/articleActions';
import ArticleList from './articleList';

class ArticlesPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <ArticleList articles={this.props.articles}/>
            </div>
        );
    }
}
ArticlesPage.propTypes = {
    articles : React.PropTypes.array.isRequired,
    actions : React.PropTypes.object.isRequired
};

function mapStateToProps(state /*, ownProps*/){
    return {
        articles : state.articles
    };
}
function mapDispatchToProps(dispatch){
    return {
        actions : bindActionCreators(articleActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticlesPage);