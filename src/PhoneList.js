import React, {Component} from 'react';

function Phone(props) {
    return (
        <li className="thumbnail">
            <a href="#" className="thumb">
                <img src={'https://github.com/angular/angular-phonecat/raw/master/app/' + props.phone.imageUrl} alt={props.phone.name}/>
            </a>
            <a href="#">{props.phone.name}</a>
            <p>{props.phone.snippet}</p>
        </li>
    );
}

class PhoneList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phones: []
        };
        fetch('https://raw.githubusercontent.com/angular/angular-phonecat/master/app/phones/phones.json')
            .then(response => response.json())
            .then(json => this.setState({phones: json}));
    }

    render() {
        return (<ul className="phones">
                {this.state.phones.map((phone, i) => <Phone key={i} phone={phone}/>)}
            </ul>
        );
    }
}

export default PhoneList;
