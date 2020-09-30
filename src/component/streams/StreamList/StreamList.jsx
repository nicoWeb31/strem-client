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

    renderAdmin = (idStream) => {

        if (this.props.authId === idStream) {
            return (
                <div className="right floated content">

                    <button className='ui button primary'> Edit</button>
                    <button className='ui button negative'> Delete</button>

                    
                </div>
            )
        }
    }


    renderList = () => {

        return this.props.streams.map(stream => {
            return (
                <div className='item' key={stream.id}>
                {this.renderAdmin(stream.usedId)}
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

        console.log(this.props.authId)

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
    return {
        streams: Object.values(state.streams),
        authId: state.auth.usedId
    }
}
export default connect(mapStateToProps, { getAllStream })(StreamList);


