import React, { Component } from 'react';
import './App.css';
import Cardlist from './components/Cardlist/Cardlist';

class App extends Component {
  constructor(){
    super()
    this.state = {
      monster : [],
      searchField : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monster: users}));
  }
  render(){

    const {monster,searchField} = this.state
    const filterMonster = monster.filter( monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <input 
        type='search' 
        placeholder='Search Monster'
        onChange={e => {
          this.setState ({ searchField : e.target.value})
        }}
        />
        <Cardlist monster={filterMonster}/>
      </div>
      );
    }
}

export default App;
