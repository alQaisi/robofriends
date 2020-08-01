import {actionTypes} from './constants.js';

const initialState = {
    searchField: '',
    robotname:'',
    robotid:[1,2,3,4,5,6,7,8,9,10]
}

const initialStateRobots={
  isPending:false,
  robots:[],
  error:''
}

export const robotsReducer = (state=initialState, action={}) => {
    switch (action.type) {
      case actionTypes.CHANGE_SEARCHFIELD:
        return Object.assign({}, state, {searchField: action.payload,});
      case actionTypes.ROBOTNAME:
        return Object.assign({}, state, {robotname: action.payload});
      case actionTypes.ROBOTID:
        return Object.assign({}, state, {searchField:'',robotname:'',robotid: action.payload});
      default:
        return state;
    }
};
export const requestRobots=(state=initialStateRobots,action={})=>{
  switch(action.type){
    case actionTypes.REQUEST_ROBOTS_PENDING:
      return Object.assign({},state,{isPending:true});
    case actionTypes.REQUEST_ROBOTS_SUCCESS:
      return Object.assign({},state,{robots:action.payload,isPending:false});
    case actionTypes.REQUEST_ROBOTS_FAILED:
      return Object.assign({},state,{error:action.payload,isPending:false});
    default:
      return state;
  }
};