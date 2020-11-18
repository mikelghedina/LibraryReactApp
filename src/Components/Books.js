import React from 'react';
import "./Books.css";


function Books(props){
    return (
    <div className="books">
        <span>{props.name}</span>
    </div>
    )
    
}

export default Books;