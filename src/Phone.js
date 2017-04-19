import React from 'react';
import {Link} from 'react-router-dom'

const Phone = (props) => {
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
};

export default Phone;