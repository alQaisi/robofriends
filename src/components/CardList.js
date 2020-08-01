import React from 'react';
import Card from './Card'
const CardList=({robots,click,robotid})=>{
    return(
    <div>
        {
            robots.map((user,index)=><Card key={user.id} id={robotid[index]}
                name={user.name} 
                email={user.email}
                click={click}/>)}
    </div>
    );
}
export default CardList;
