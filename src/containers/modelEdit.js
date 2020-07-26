import React from 'react';
import { connect } from 'react-redux';

import ModelForm from './modelForm';
import { getAddress, editAdress } from './../actions/fetchData';

class ModelEdit extends React.Component {

	componentDidMount() {
        this.props.getAddress(this.props.match.params.id)
	}

	theSubmit = (formValues) => {
		this.props.editAdress(this.props.match.params.id, formValues)
		this.props.history.push(`/view/${this.props.match.params.id}`)
	}


	render() {
		var { name
			,street
			,town
			,area} = this.props.address
		return (
			
			<div class="container">
				
				<div class="page-header">
				  <h1>Edit</h1>
				</div>

				<ModelForm 
					theSubmit={this.theSubmit} 
					initialValues={{name, street, town,area}}
				/>
				
			</div>
			

		);
	}
}

const mapStateToProps = (state) => {
	return {
        address: state.addresses
    }
}

export default connect(mapStateToProps,{
	getAddress, editAdress
})(ModelEdit);
