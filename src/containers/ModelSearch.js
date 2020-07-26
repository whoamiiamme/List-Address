import React, {useState} from 'react';
import { connect } from 'react-redux';

import { searchKeys } from './../actions/onSearch';

const Search = (props) => {
    const [keys,setKeys] = useState('');

    const onChange = (e) => {
        var target = e.target;
        var value = target.value
        setKeys(value)
    }

    const inputSearch = () => {
        props.searchKeys(keys)
    }

    return (
        <form className="navbar-form navbar-left" role="search">
        <div className="form-group">
            <input name="keys" value={keys} onChange={onChange} type="text" className="form-control" placeholder="Search"/>
        </div>
        <button type="button" onClick={ inputSearch } className="btn btn-default">Search</button>
    </form>
    );
}

export default connect(null,{
    searchKeys
})(Search);