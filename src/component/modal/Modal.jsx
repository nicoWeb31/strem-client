import React from 'react'
import ReactDom from 'react-dom';


//custum history for reditect
import history from '../../history'



const Modal = ({title,content,actionBtn}) => {
    return ReactDom.createPortal(
        <div className='ui dimmer modals visible active'
        onClick={()=>history.push('/')}
        >
            <div className="ui standard modal visible active"
            onClick={(e)=>e.stopPropagation()}
            >
                <div className="header">
                    {title}
                </div>
                <div className="content">
                    {content}
                </div>
                <div className="actions">
                    <button className ='ui primary button' > {action}</button>
                    <button className ='ui  button' onClick={()=>history.push('/')}>Cancel</button>

                </div>
            </div>
        </div>,
        document.querySelector('#modalPortal')
    )
}

export default Modal;

