import React from 'react';
import { Link } from 'react-router-dom';

import Search from './../containers/ModelSearch';

const Header = () => {
    return(
        <React.Fragment>
            
            <nav className="navbar navbar-default" role="navigation">
                <div className="navbar-header">

                    <Link className="navbar-brand" to="/">Home</Link>
                </div>
            
                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href=" #">About</a></li>
                        <li><a href=" #">Help</a></li>
                    </ul>
                    <Search />
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/profile/new">Plus Address</Link></li>

                    </ul>

                </div>
            </nav>

        
            

</React.Fragment>

    );
}

export default Header;