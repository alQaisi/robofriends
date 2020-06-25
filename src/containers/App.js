import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';
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
    randomImages=()=>{
        const {robots}=this.state;
        robots.forEach((robot,index)=>robot.id=Math.floor(Math.random() * ( (index+1)*30 - index*30 ))+index*30)
        this.setState({robots:robots,searchfield:'',robotname:''});
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
                    <button className="f4 link dim ph3 pv2 mb2 dib white bg-blue" style={{border:'5px',borderRadius:'25px'}} onClick={this.randomImages}>random</button>{' '}
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll greedting="hi">
                    <ErrorBoundry>
                    <CardList robots={filteredRobots} click={this.onRobotClick}/>
                    </ErrorBoundry>
                   
                   </Scroll>
                </div> 
            );
        }     
    }
export default App;