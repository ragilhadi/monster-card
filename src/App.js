import React, { Component } from 'react';
import './App.css';
import Cardlist from './components/Cardlist/Cardlist';
import SearchBox from './components/SearchBox/SearchBox';

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

  handleChange = (e) => {
    this.setState ({ searchField : e.target.value})
  }


  render(){

    const {monster,searchField} = this.state
    const filterMonster = monster.filter( monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1 className='tittle-text'>Monster Card</h1>
        <SearchBox 
          placeholder='Search Monster'
          handlerChange={this.handleChange}
        />
        <Cardlist monster={filterMonster}/>
      </div>
      );
    }
}

export default App;
