import React, { Component } from 'react';
import InputBudget from './InputBudget'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      budget: 0,
      expense: 0, 
      balance: 0
    }
    this.addBudget = this.addBudget.bind(this);

  }
  addBudget(inputBudget){
    this.setState({
      budget: inputBudget
    })
  }
  render(){
    return (
      <div className="App">
        <InputBudget budget={this.state.budget} addBudget={this.addBudget}/>
      </div>
    );
  }
}

export default App;
