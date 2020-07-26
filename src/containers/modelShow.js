import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAddress } from './../actions/fetchData';
import ShowAddress from './../components/showAddress';
import ModelDel from './modelDel';

class ModelShow extends Component {

    componentDidMount() {
        this.props.getAddress(this.props.match.params.id)

    }

    theDelete() {
        const { id } = this.props.match.params;
        return(
            <ModelDel 
                id={id}
                product={ this.props.address }
            />
        );
    }

    render() {
        return (
            <ShowAddress id={this.props.match.params.id} 
                product={ this.props.address } 
                theDelete={ this.theDelete() }
            />

        );
    }
}

const mapStateToProps = (state) => {
    return {
        address: state.addresses
    }
}

export default connect(mapStateToProps,{ getAddress })(ModelShow);