import React from 'react';
import Modal from '../../modal/Modal'

//custum history for reditect
import history from '../../../history'


const StreamDelete = () => {


    const actions = (

        <React.Fragment>
            <button className='ui button negative'>Delete</button>
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
            content="Are you sur to delete this stream ?"
            actionBtn="Delete"
            onDismiss={onDismiss}
            actions={actions}
        />
        </div>
    );
}

export default StreamDelete;