import React from 'react';
import Modal from '../../modal/Modal'


const StreamDelete = () => {
    return (
        <div>
        delete
        
        <Modal
            title="Delete stream ?"
            content="Are you sur to delete this stream ?"
            actionBtn="Delete"
        />
        </div>
    );
}

export default StreamDelete;