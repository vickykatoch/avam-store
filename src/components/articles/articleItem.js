import React from 'react';


const ArticleItem = ({article})=>{
    return (
        <div className="col-sm-6 col-md-4 col-xs-12">
            <div className="panel panel-default">
                <div className="panel-heading">
                    {article.title}
                </div>
                <div className="panel-body">
                    {article.description}
                </div>
            </div>
        </div>
    );
};

ArticleItem.propTypes = {
    article : React.PropTypes.object.isRequired
}

export default ArticleItem;