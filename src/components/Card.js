import React from 'react';
import './Card.css';
const Card=({name,email,id,click})=>{
    return(
       <div onClick={click.bind(this,name)} className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
           <img className="img-card" alt="robot" src={`https://robohash.org/${id}?200x200`} />
           <div>
               <h2>{name}</h2>
               <p>{email}</p>
           </div>
       </div> 
    );
}
export default Card;