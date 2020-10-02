import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

    renderAdmin = (idStreamer, idStream) => {

        if (this.props.authId === idStreamer) {
            return (
                <div className="right floated content">

                    <Link to={`/stream/edit/${idStream}`} className='ui button primary'>Edit</Link>
                    <Link to={`/stream/delete/${idStream}`} className='ui button negative' >Delete</Link>

                </div>
            )
        }
    }


    renderCreate = () => {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to='/stream/new' className='ui button primary'>
                        Create Stream
                    </Link>
                </div>
            )
        }

    }


    renderList = () => {

        return this.props.streams.map(stream => {
            return (
                <div className='item' key={stream.id}>
                    {this.renderAdmin(stream.usedId, stream.id)}
                    <i className='large middle aligned icon camera' />
                    <div className="content">
                        <Link to ={`stream/${stream.id}`}>
                        {stream.title}
                        </Link>

                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {


        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>

        );
    }
}



const mapStateToProps = state => {
    //object.values renvoie un tableau d'un objet 
    return {
        streams: Object.values(state.streams),
        authId: state.auth.usedId,
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect(mapStateToProps, { getAllStream })(StreamList);


