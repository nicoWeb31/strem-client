import React, { Component } from 'react'

import { connect } from 'react-redux';
import { getAllStream } from '../../../action/action'

class StreamList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getAllStream()
    }


    renderList = () => {

        return this.props.streams.map(stream => {
            return (
                <div className='item' key={stream.id}>
                    <i className='large middle aligned icon camera' />
                    <div className="content">
                        {stream.title}
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {

        console.log(this.props.streams)

        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
            </div>

        );
    }
}



const mapStateToProps = state => {
    //object.values renvoie un tableau d'un objet 
    return { streams: Object.values(state.streams) }
}
export default connect(mapStateToProps, { getAllStream })(StreamList);


