import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

  this.state =  {
    color: 'blue',
    clickCounter: 0 
  }  
}

onChange = (e) => {
  let i = Math.floor(Math.random()*3);
  let colors = ['blue','orange','green'];
  this.setState({
    color: colors[i],
    clickCounter: this.state.clickCounter++
  })
}
  render(){
    return (
      <div className='App'>
          <h1>Box color change</h1>
          <div className="colorBox"
          style = {{backgroundColor:this.state.color}} onClick={this.onChange} >
            <p >Click Here </p>
          </div>
      </div>
    )
  }
}
