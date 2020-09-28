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

            </div>
        )
    }


    render() {
        return (

            <form>
                <Field name="title"
                    component={this.renderInput}
                    label='Enter title'

                />

                <Field name="description"
                    component={this.renderInput}
                    label='Enter description'


                />

            </form>
        );
    }
}



export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);