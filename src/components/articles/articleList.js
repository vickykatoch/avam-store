import React from 'react';
import ArticleItem from './articleItem';

const ArticleList = ({articles})=>{
    const articlesUi = articles.map(article=>{
        return <ArticleItem article={article} key={article.id}/>
    });

    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                Articles
            </div>
            <div className="panel-body">
                <div className="row">
                    {articlesUi}
                </div>
            </div>
        </div>
    );
};

ArticleList.propTypes = {
    articles : React.PropTypes.array.isRequired
};

export default ArticleList;