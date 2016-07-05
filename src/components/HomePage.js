import React from 'react';
import {Link} from 'react-router';

const HomePage = (props) => {
    return (
        <div>
            <div className="jumbotron">
                <h1>Article Store</h1>
                    <p>
                    React, Redux and React Router in ES6 for ultra-responsive web apps.
                    </p>
                    <p>
                        <Link to="articles" className="btn btn-primary btn-lg">Articles</Link>
                    </p>
            </div>
        </div>
    );
};

export default HomePage;