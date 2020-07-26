import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = (props) => {
    
    return(
        <li className="list-group-item">
        <div className="list-group">
            <Link to={`/view/${props.product.id}`} className="list-group-item active">
                <h4 className="list-group-item-heading">{props.product.name}</h4>
                <p className="list-group-item-text">{props.product.street}</p>
            </Link>
            </div>
            

            
        </li>
    );
}

export default ListItem;