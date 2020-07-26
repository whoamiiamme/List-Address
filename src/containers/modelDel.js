import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

import { delAddress } from './../actions/fetchData';

const ModelDel = props => {
    let history = useHistory();

    const renderContent = () => {
        if(!props.product){
            return 'Are you sure delete this address'
        }

        return `Are you sure want delete address: ${props.product.name}`
    }

    const onDelAddress = (id) => {
        props.delAddress(id);
        history.push('/')
    }

    return (
        <React.Fragment>
                <a className="btn btn-danger" data-toggle="modal" href='#modal-id'>Delete</a>
                <div className="modal fade" id="modal-id">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 className="modal-title">Delete address to list</h4>
                            </div>
                            <div className="modal-body">
                                { renderContent()}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button onClick={() => onDelAddress(props.id) } data-dismiss="modal" type="button" className="btn btn-primary">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>

                
                
        </React.Fragment>
    );
} 


export default connect(null,{ delAddress })(ModelDel);