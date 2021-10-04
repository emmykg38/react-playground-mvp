import React from 'react';
import ReactDOM from 'react-dom';


const PlaygroundCard = (props) => {
    return (
        <div className="content">
            {props.children}
        </div>
    );
};

export default PlaygroundCard;