import React from 'react';
import style from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import { Route } from 'react-router-dom';
import Messages from './Messages/Messages';




const Dialogs = ( props ) => {

    const { dialogsPage } = props;
    const {addMessage, setMessageText} = props;

    const dialogMessages = dialogsPage.map( (dialog, index) => {
        const path = '/dialogs/' + dialog.path;
        const {id, newMessage, dialogs} = dialog 
        return(
            <Route path = { path } key= { index }
                render = { () => <Messages 
                    id={id} newMessage={newMessage} dialogs={dialogs}
                    addMessage={addMessage} setMessageText={setMessageText} /> }  
            />
        )
    } )

    const nameData = dialogsPage.map( (dialog) => {
        const {path, name, avatar} = dialog
        return ({ path, name, avatar })
    } )

    return (
        <div className={style.dialogsWrapper}>
            <DialogName nameData = {nameData} />
            {dialogMessages}
            <Route exact path='/dialogs'
                render={() =>
                    <span className={style.greeting}>
                        Please, choose a dialog<br />or create a new one.
                    </span>
                } />
        </div>
    )
}

export default Dialogs;