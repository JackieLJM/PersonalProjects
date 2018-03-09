import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'velocity-animate';
import 'velocity-animate/velocity-ui';
import { VelocityComponent } from 'velocity-react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import logo from './logo.svg';
// import './App.css';
const WikiItem = () =>
    <div></div>


const WikiList = () =>
    <div className="mx-5" style={{background:"black",height:500}}>React</div>

class SeachBar extends Compoent {
    render() {
        return (
        <div>
			<input type="search" />
			<FontAwesomeIcon icon="search"/>
		</div>
        );
    }
}
class App extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <SeachBar/> 
            <VelocityComponent >
            	<WikiList/> 
            </VelocityComponent>
        );
    }
}

export default App;