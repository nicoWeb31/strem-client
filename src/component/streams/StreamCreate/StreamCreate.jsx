import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'


class StreamCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    renderInput = (formsProps) => {
        return (

            <div className="field">
                <label>{formsProps.label}</label>
                <input

                    // onChange={formsProps.input.onChange}
                    // value={formsProps.input.value}

                    {...formsProps.input}

                />
                <div>{formsProps.meta.error}</div>

            </div>
        )
    }



    //on passe la methpde en argument a handelSubmit de redux-form
    
    onSubmit = (valueForm) =>{
    console.log(valueForm)
    

    }


    render() {
        return (
            //this.props.handleSubmit methode de redux-form 
            <form className='ui form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title"
                    component={this.renderInput}
                    label='Enter title'

                />

                <Field name="description"
                    component={this.renderInput}
                    label='Enter description'


                />

                <button className='ui button primary'>Submit</button>

            </form>
        );
    }
}


const validate = (formValue)=>{

    const errors ={}
    if(!formValue.title){
        errors.title = 'you must enter a title'
    }
    if(!formValue.description){
        errors.description = 'you must enter a description'
    }

    return errors

}



export default reduxForm({
    form: 'streamCreate',
    validate:validate
})(StreamCreate);