import React, { Component } from 'react';
import './App.css';
import Cardlist from './components/Cardlist/Cardlist';

class App extends Component {
  constructor(){
    super()
    this.state = {
      monster : []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monster: users}));
  }

  render(){
  return (
    <div className="App">
      <Cardlist monster={this.state.monster}/>
    </div>
    );
  }
}

export default App;
