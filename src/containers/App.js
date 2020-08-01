import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
import {setSearchField,setRobotName,setRobotID, requestRobots} from '../actions.js'; 

const mapStateToProps = (state) => {
    return {
        searchField:state.robotsReducer.searchField,
        robotname:state.robotsReducer.robotname,
        robotid:state.robotsReducer.robotid,
        robots:state.requestRobots.robots,
        isPending:state.requestRobots.isPending,
        error:state.requestRobots.error
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
        onRobotClick:(data)=>dispatch(setRobotName(data)),
        randomImages:(data)=>dispatch(setRobotID(data)),
        OnRequestRobots:()=>dispatch(requestRobots())
    }
}
class App extends Component{
    componentDidMount(){
        this.props.OnRequestRobots();
    }
    render(){
        const {robots,isPending,robotid,robotname,searchField,randomImages,onRobotClick,onSearchChange}=this.props;
        const filteredRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
            <h1 className="sega f3">loading...</h1>:
            (
                <div className="tc">
                    <h1 className="f1 sega">robofriends</h1>
                    <h3 className="f4">{robotname}</h3>
                    <button className="f4 link dim ph3 pv2 mb2 dib white bg-blue" style={{border:'5px',borderRadius:'25px'}} onClick={randomImages.bind(this,robotid)}>random</button>{' '}
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll greedting="hi">
                    <ErrorBoundry>
                    <CardList robots={filteredRobots} click={onRobotClick} robotid={robotid}/>
                    </ErrorBoundry>
                   </Scroll>
                </div> 
            );
        }     
    }
    
export default connect(mapStateToProps, mapDispatchToProps)(App)
