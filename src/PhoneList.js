import React, {Component} from 'react';
import {Link} from 'react-router-dom'

function Phone(props) {
    return (
        <li className="thumbnail">
            <Link to={'/details/' + props.phone.id}>
                <a href="#" className="thumb">
                    <img src={'https://github.com/angular/angular-phonecat/raw/master/app/' + props.phone.imageUrl}
                         alt={props.phone.name}/>
                </a>
            </Link>
            <Link to={'/details/' + props.phone.id}>
                <a href="#">{props.phone.name}</a>
            </Link>
            <p>{props.phone.snippet}</p>
        </li>
    );
}

class PhoneList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phones: [],
            query: '',
            orderProp: 'age'
        };

        fetch('https://raw.githubusercontent.com/angular/angular-phonecat/master/app/phones/phones.json')
            .then(response => response.json())
            .then(json => this.setState({phones: json}));
    }

    render() {
        let filteredPhones = this.state.phones.filter((phone) => {
            let regex = new RegExp(this.state.query, 'i');
            return regex.test(phone.name);
        });
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
                        <ul className="phones">
                            {filteredPhones.map((phone, i) => <Phone key={i} phone={phone}/>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhoneList;
