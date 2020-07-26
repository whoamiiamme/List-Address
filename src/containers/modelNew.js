import React, { Component } from 'react';
import { connect } from 'react-redux';

import ModelForm from './modelForm';
import { postAddress } from './../actions/fetchData';

class ModelNew extends Component {

    theSubmit = (value) => {
		var adId = '_' + Math.random().toString(36).substr(2, 9);
        this.props.postAddress(adId, value);
        this.props.history.push('/');
    }

    render() {

        return (
            
            <div className="container">
                
                <div className="page-header">
                  <h1>Add</h1>
                </div>

                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

                    <ModelForm theSubmit={this.theSubmit} />
                </div>
                

            </div>
            
        );
    }
}

export default connect(null, {
    postAddress
})(ModelNew);