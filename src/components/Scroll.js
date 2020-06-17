import React from 'react';
import '../containers/App.css';
const Scroll=(props)=>{
    return(
        <div className="scrollbar" style={{overflowY:'scroll',border:'5px solid black',height:'650px'}}>
            {props.children}
        </div>
    );
};
export default Scroll;