import React, {Component} from 'react';
import './App.css';
import PhoneList from "./PhoneList";
import './Style/styles.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            orderProp: 'age'
        };
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <label>
                            Search:
                            <input value={this.state.query}
                                   onChange={(evt) => this.setState({query: evt.target.value})}/>
                        </label>
                        <label>
                            Sort by:
                            <select value={this.state.orderProp}
                                    onChange={(evt) => this.setState({orderProp: evt.target.value})}>
                                <option value="name">Alphabetical</option>
                                <option value="age">Newest</option>
                            </select>
                        </label>
                    </div>
                    <div className="col-md-10">
                        <PhoneList/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
