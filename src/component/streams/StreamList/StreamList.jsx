import React, { Component } from 'react'

import { connect  } from 'react-redux';
import {getAllStream} from '../../../action/action'

class StreamList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount(){
        this.props.getAllStream()
    }

    render() {

        console.log(this.props.streams)

        return (
            <div>
            <h1>list stream</h1>
            </div>

        );
    }
}



const mapStateToProps = state =>{
    return {streams : state.streams}
}
export default connect(mapStateToProps,{getAllStream})(StreamList);


