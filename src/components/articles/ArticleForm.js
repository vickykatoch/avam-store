import React from 'react';


const ArticleForm = ({article, handleSubmit})=>{
    return (
       <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label labelFor="">Title</label>
                <input type="text" id="title" name="title"
                    value={article.title} className="form-control"/>
            </div>
            <input type="submit" value="Submit" className="btn btn-primary"/>
            <input type="reset" value="Reset"  className="btn btn-primary"/>
       </form> 
    );
};

ArticleForm.propTypes = {
    article : React.PropTypes.object.isRequired,
    handleSubmit : React.PropTypes.func.isRequried
};
export default ArticleForm;