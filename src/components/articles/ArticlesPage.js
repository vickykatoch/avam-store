import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as articleActions from '../../actions/articleActions';
import ArticleList from './articleList';

class ArticlesPage extends React.Component {
    constructor(props) {
        super(props);
        this.openManageArticlePage=this.openManageArticlePage.bind(this);
    }
    openManageArticlePage(){
        browserHistory.push('/article/0');
    }
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col-xs-6">
                            <span className="panel-title">
                                Articles
                            </span>
                        </div>
                        <div className="col-xs-6">
                            <div className="pull-right">
                                <button className="btn btn-primary btn-sm"
                                    onClick={this.openManageArticlePage}>
                                    New Article
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="panel-body">
                    <div className="row">
                        <ArticleList articles={this.props.articles}/>
                    </div>
                </div>
            </div>
        );
    }
}
ArticlesPage.propTypes = {
    articles: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state /*, ownProps*/) {
    return {
        articles: state.articles
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(articleActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticlesPage);