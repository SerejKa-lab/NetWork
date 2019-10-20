import React from 'react';
import style from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import Messages from './Messages/Messages';




const Dialogs = (props) => {
    
    return (
        <div className={style.dialogs}>

            <DialogName dialogNames = {props.dialogNames} />
            <Messages messageText = {props.messageText} />
            
        </div>
    )
}

export default Dialogs;