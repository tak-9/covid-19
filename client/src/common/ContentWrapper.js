import React from 'react';
import Footer from './Footer';
function ContentWrapper(props) { 
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default ContentWrapper;