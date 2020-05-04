import React from 'react';

function ContentWrapper(props) { 
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                {props.children}
            </div>
        </div>
    )
}

export default ContentWrapper;