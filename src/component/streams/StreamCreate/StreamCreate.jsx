import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createStream } from '../../../action/action'



class StreamCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // meta pour voir quand l'utilisateur rentre dans le form, pour declancher le rendu des errors
    renderErrors = ({error, touched}) =>{
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }
    
    renderInput = (formsProps) => {


        const className = `field ${formsProps.meta.error && formsProps.meta.touched ? "error" : "" }`

        return (

            <div className={className}>
                <label>{formsProps.label}</label>
                <input autoComplete="off"

                    // onChange={formsProps.input.onChange}
                    // value={formsProps.input.value}

                    {...formsProps.input}

                />
                <div>{this.renderErrors(formsProps.meta)}</div>

            </div>
        )
    }





    //on passe la methpde en argument a handelSubmit de redux-form
    
    onSubmit = (valueForm) =>{
    
    //call action
    this.props.createStream(valueForm)
    

    }


    render() {
        return (
            //this.props.handleSubmit methode de redux-form 
            <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
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



const formWrapped = reduxForm({
    form: 'streamCreate',
    validate:validate
})(StreamCreate);

export default connect(null,{createStream})(formWrapped);