import React from 'react';
import {Link} from 'react-router';

const HomePage = (props) => {
    return (
        <div>
            <div className="jumbotron">
                <h1>Article Store</h1>
                    <p>This is a template for a simple marketing or informational website.It includes a large callout called a jumbotron and three supporting pieces of content.Use it as a starting point to create something more unique.</p>
                    <p>
                        <Link to="articles" className="btn btn-primary btn-lg">Articles</Link>
                    </p>
            </div>
        </div>
    );
};

export default HomePage;