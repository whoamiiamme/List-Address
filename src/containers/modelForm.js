import React from 'react';
import { Field, reduxForm } from 'redux-form';


const ModelForm = (props) => {
    console.log(props);
    const submit = (formValues) => {
        props.theSubmit(formValues);
    }

    const inputAddress = ({input, label}) => {
        return(
            <div className="form-group">
                <label htmlFor="text">{label}</label>
                <input type="text" className="form-control" {...input} />
            </div>
        )
    }

    return(
        <form 
        onSubmit={props.handleSubmit(submit)}  
        className="form-ground"
        >
            <Field name="name" component={inputAddress} label="Name address" />
            <Field name="street" component={inputAddress} label="Street" />
            <Field name="town" component={inputAddress} label="City(town)" />
            <Field name="area" component={inputAddress} label="State(area)" />


                <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default reduxForm({
    form: 'form-default',
    enableReinitialize: true
})(ModelForm);