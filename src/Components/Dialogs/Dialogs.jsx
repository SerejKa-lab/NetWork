import React from 'react';
import { Route } from 'react-router-dom';
import style from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import Messages from './Messages/Messages';




const Dialogs = (props) => {
    
    return (
        <div className={style.dialogs}>

            <DialogName dialogNames = {props.state.dialogNames} />
            <Route path='/dialogs/name1'
                render={() => <Messages dialogBox = {props.state.dialogBox} />}  />
            
        </div>
    )
}

export default Dialogs;