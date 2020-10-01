import React, { Component } from 'react';
import StreamForm from '../streamForm/StreamForm';
//import _ from 'lodash'

import { connect } from 'react-redux';
import { getStream, editStream } from '../../../action/action';






class StreamEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log(this.props)
        //console.log(this.props.stream)

        this.props.getStream(this.props.match.params.id)
    }

    onSubmit = (formValue) => {
        this.props.editStream(this.props.match.params.id, formValue)
    }

    render() {
        return (

            <div>
                <h3>Stream Edit</h3>

                <StreamForm onFormSubmit={this.onSubmit} 
                //initialValues utiloiser par redux form important de respecté le noms pour faire le lien avev les fields
                initialValues={{title:this.props.stream.title, description: this.props.stream.description}}
                //with lodash :
                //initialValues={_.pick(this.props.stream,'title','description')}

                />

            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps.match.params.id)
    // console.log(state.streams)
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { getStream, editStream })(StreamEdit);