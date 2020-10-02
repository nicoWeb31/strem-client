import React,{useEffect} from 'react';
import Modal from '../../modal/Modal';
import { connect } from 'react-redux';
import { deleteStream,getStream } from '../../../action/action'

//custum history for reditect
import history from '../../../history'


const StreamDelete = (props) => {



    useEffect(() => {
        props.getStream(props.match.params.id)
    })


    const actions = (

        <React.Fragment>
            <button className='ui button negative' onClick={()=>props.deleteStream(props.match.params.id)}>Delete</button>
            <button className='ui button' onClick={()=>history.push('/')}>Cancel</button>
        </React.Fragment>

    )

    const  onDismiss = () =>{
        history.push('/')
    }


    return (
        <div>
        delete
        
        <Modal
            title="Delete stream ?"
            content={`Are you sur to delete stream ${props.stream && props.stream.title} ?`}
            actionBtn="Delete"
            onDismiss={onDismiss}
            actions={actions}
        />
        </div>
    );
}


const mapStateToProps = (state,ownProps) =>{
    return {stream : state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{deleteStream,getStream})(StreamDelete);