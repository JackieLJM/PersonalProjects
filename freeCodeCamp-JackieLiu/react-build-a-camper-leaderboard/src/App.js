import React, {
  Component
} from 'react';
// import logo from './logo.svg';
// import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import spinner from '@fortawesome/fontawesome-free-solid/faSpinner'
import {
  Table
} from 'reactstrap';
import './App.css';
import List from './List.js';
import Api from './twoApi.js';
// fontawesome.library.add(brands);估计是避免为了在不同的组件里重复导入fontawesome模块

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    Api.recent().then()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<!-- <img src={logo} className="App-logo" alt="logo" /> -->*/}
          <FontAwesomeIcon icon={brands.faFreeCodeCamp} className='App-logo fa-4x'/>
          <h1 className="App-title">Welcome to React's Freecodecamp Leaderboard</h1>
        </header>
       {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
          {Object.keys(this.state).length===0?<FontAwesomeIcon icon={spinner} className="fa-5x fa-pulse" style={{marginTop:"1rem"}}/>:<Table responsive sm striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Camper Name</th>
                <th>Points in past 30 days</th>
                <th>All time points</th>
              </tr>
            </thead>
            <tbody>
              {()=><List/>}
            </tbody>
          </Table>} 
      </div>
    );
  }
}

export default App;