import React, {Component} from 'react';
import {Link} from 'react-router-dom'

function Phone(props) {
    return (
        <li className="thumbnail">
            <Link to={'/details/' + props.phone.id} className="thumb">
                <img src={'./' + props.phone.imageUrl}
                     alt={props.phone.name}/>
            </Link>
            <Link to={'/details/' + props.phone.id}>
                {props.phone.name}
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

        fetch('./Phones/phones.json')
            .then(response => response.json())
            .then(json => this.setState({phones: json}));
    }

    render() {
        let filteredPhones = this.state.phones.filter((phone) => {
            let regex = new RegExp(this.state.query, 'i');
            return regex.test(phone.name);
        });

        filteredPhones.sort((a, b) => {
            if (this.state.orderProp === 'age') {
                return a[this.state.orderProp] > b[this.state.orderProp];
            } else {
                return a[this.state.orderProp].localeCompare(b[this.state.orderProp]);
            }
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
