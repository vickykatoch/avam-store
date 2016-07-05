import React from 'react';
import ArticleItem from './articleItem';

const ArticleList = ({articles}) => {
    const articlesUi = articles.map(article => {
        return <ArticleItem article={article} key={article.id}/>
    });

    return (
        <div>
        {articlesUi}
        </div>
    );
};

ArticleList.propTypes = {
    articles: React.PropTypes.array.isRequired
};

export default ArticleList;