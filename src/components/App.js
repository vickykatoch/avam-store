import React from 'react';
import Header from './common/Header';

const App = (props)=>{
    return (
        <div>
            <Header />
            <div className="container" style={{marginTop: "60px"}}>
                {props.children}
            </div>
        </div>
    );
};
App.propTypes = {
    children: React.PropTypes.element
};
export default App;