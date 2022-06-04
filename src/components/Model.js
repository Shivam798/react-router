import React from 'react'
import ReactDOM from 'react-dom';
function Model(props) {
  return ReactDOM.createPortal(
    <div className='ui dimmer show modals visible active'>
        <div className='ui raised very padded text container segment'>
            <h1>I am a modal</h1>
        </div>
    </div>,
    document.querySelector("#model")
  )
}

export default Model;