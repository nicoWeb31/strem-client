import React from 'react'
import ReactDom from 'react-dom'



const Modal = () => {
    return ReactDom.createPortal(
        <div className='ui dimmer modals visible active'>
            <div className="ui standard modal visible active">
modal
            </div>
        </div>,
        document.querySelector('#modalPortal')
    )
}

export default Modal;

