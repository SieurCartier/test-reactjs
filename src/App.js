import React, {Component} from 'react';
import './App.css';
import PhoneList from "./PhoneList";
import './Style/styles.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PhoneDetails from './PhoneDetails'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact={true} component={PhoneList}>
                    </Route>
                    <Route path="/details/:phoneId" component={PhoneDetails}>
                    </Route>
                </div>
            </Router>
        );
    }
}

export default App;
