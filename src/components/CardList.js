import React from 'react';
import Card from './Card'
const CardList=({robots,click})=>{
    if(true){
        alert("eaf");
    }
    return(
    <div>
        {
            robots.map(user=><Card key={user.id} id={user.id}
                name={user.name} 
                email={user.email}
                click={click}/>)}
    </div>
    );
}
export default CardList;
