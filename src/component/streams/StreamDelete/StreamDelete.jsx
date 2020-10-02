import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Modal from '../../modal/Modal';
import { connect } from 'react-redux';
import { deleteStream, getStream } from '../../../action/action'

//custum history for reditect
import history from '../../../history'


const StreamDelete = (props) => {

    useEffect(() => {
        props.getStream(props.match.params.id)
    })


    const actions = (

        <React.Fragment>
            <button className='ui button negative' onClick={() => props.deleteStream(props.match.params.id)}>Delete</button>
            <Link className='ui button' to='/'>
                Cancel
            </Link>
        </React.Fragment>

    )

    const onDismiss = () => {
        history.push('/')
    }

    ///render content

    const renderContent = (stream) => {

        if (!stream) {
            return 'Are you sure you want delete this stream ?'
        }

        return `Are you sur to delete stream ${stream && stream.title} ?`
    }


    return (
        <React.Fragment>

            <Modal
                title="Delete stream ?"
                content={renderContent(props.stream)}
                actionBtn="Delete"
                onDismiss={onDismiss}
                actions={actions}
            />
        </React.Fragment>
    );
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}
export default connect(mapStateToProps, { deleteStream, getStream })(StreamDelete);