import React from 'react';

const ViewList = (props) => {
    return(
        <React.Fragment>
            
            <div className="page-header">
                  <h1>Viet Name<small> Addresses</small></h1>
                </div>
                
                <ul className="list-group">
                    { props.children }

                </ul>
        </React.Fragment>
    );
}

export default ViewList;