import React, { Component } from 'react'

import { connect } from 'react-redux';
import { getStream }  from '../../../action/action';






class StreamEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

componentDidMount(){
    console.log(this.props)
    //console.log(this.props.stream)

    this.props.getStream(this.props.match.params.id)
}

    render() {
        return (

            <div>{this.props.stream && this.props.stream.title}</div>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps.match.params.id)
    // console.log(state.streams)
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps,{ getStream })(StreamEdit);