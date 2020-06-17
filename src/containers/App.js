import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
class App extends Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:'',
            robotname:''
   }
}
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=>this.setState({robots:users}));
    }
    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value})
}
    onRobotClick=(data)=>{
        this.setState({robotname:data})
}
    render(){
        const {robots,searchfield,robotname}=this.state;
        const filteredRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
            <h1 className="sega f3">loading...</h1>:
            (
                <div className="tc">
                    <h1 className="f1 sega">robofriends</h1>
                    <h3 className="f4">{robotname}</h3>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll greedting="hi">
                   <CardList robots={filteredRobots} click={this.onRobotClick}/>
                   </Scroll>
                </div> 
            );
        }     
    }
export default App;