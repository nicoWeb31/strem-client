import React from 'react'
import ReactDom from 'react-dom';






const Modal = ({title,content,actionBtn,pathSkip,actions,onDismiss}) => {
    return ReactDom.createPortal(
        <div className='ui dimmer modals visible active'
        onClick={onDismiss}
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
                {/* <div className="actions">
                    <button className ='ui primary button' > {actionBtn}</button>
                    <button className ='ui  button' onClick={()=>history.push(pathSkip)}>Cancel</button>

                </div> */}
                <div className='actions'>
                {actions}

                </div>

            </div>
        </div>,
        document.querySelector('#modalPortal')
    )
}

export default Modal;

