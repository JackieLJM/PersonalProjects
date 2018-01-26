import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
// import './App.css';
const WikiItem=()=>
  <div></div>


const WikiList=()=>
  <div className="mx-5" style={{background:"black",height:500}}>React</div>


class App extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <WikiList/>
    );
  }
}

export default App;
