import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Gaston'
        };
    }
    render() {
        return (
            <h1>Hello, {this.state.name} !</h1>
        );
    }
}

export default App;
