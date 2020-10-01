import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../../action/action';
import StreamForm from '../streamForm/StreamForm'



class StreamCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    onSubmit = (valueForm) => {

        this.props.createStream(valueForm)


    }


    render() {
        return (
            <div>
                <h3>Create a stream</h3>

            <StreamForm  onFormSubmit={this.onSubmit} />

            </div>
        );
    }
}



export default connect(null, { createStream })(StreamCreate);