import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as articleActions from '../../actions/articleActions';
import ArticleForm from './ArticleForm';

class ManageArticle extends React.Component{
    constructor(props){
        super(props);
        this.handleReset=this.handleReset.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        alert('submit');
    }
    handleReset(e){
        alert('reset');
    }
    render(){
        return(
            <div>
                <h1>Article </h1> 

                <ArticleForm article={this.props.article}
                    handleSubmit={this.handleSubmit}
                    />
            </div>
        );
    }
}

//Pull in the React Router context so router is available on this.context.router.
ManageArticle.contextTypes = {
  router: React.PropTypes.object
};


ManageArticle.propTypes = {
    article: React.PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps){
    let id = ownProps.params.id;
    let article = articleActions.newArticle();
    if(id && parseInt(id)>0){
        article = getArticleById(state,id);
    }
    if(article===null) throw Error("No article found for id : " + id);
    return{
        article: article
    };
}
function  mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(articleActions, dispatch)
    };
}
function getArticleById(articles,id){
    let result = articles.filter(c=>c.id===id);
    if (result) return result[0]; //since filter returns an array, have to grab the first.
    return null;
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageArticle);