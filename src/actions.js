import {actionTypes} from './constants.js';

export const setSearchField = (text) =>({ 
    type: actionTypes.CHANGE_SEARCHFIELD,
    payload: text 
});
export const setRobotName = (name) =>({
    type: actionTypes.ROBOTNAME,
    payload: name 
});
export const setRobotID = (robotid) =>({
    type: actionTypes.ROBOTID,
    payload:robotid.map((robotid,index)=>robotid=Math.floor(Math.random() * ( (index+1)*30 - index*30 ))+index*30)
});

export const requestRobots=()=>(dispatch)=>{
    dispatch({type:actionTypes.REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data=>dispatch({type:actionTypes.REQUEST_ROBOTS_SUCCESS,payload:data}))
    .catch(error=>dispatch({type:actionTypes.REQUEST_ROBOTS_FAILED,payload:error}))
};