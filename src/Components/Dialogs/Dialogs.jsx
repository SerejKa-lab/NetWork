import React from 'react';
import style from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import Messages from './Messages/Messages';
import { Route } from 'react-router-dom';




const Dialogs = ( props ) => {

    const { dialogsPage} = props;
    const {setNewMessage, addMessageKey, addMessageClick } = props;

    let dialogNamesMessages = dialogsPage.map( (name) => {
        let path = '/dialogs/' + name.path;
        return(
            <Route path = { path }
                    render = { () => <Messages 
                            messages = { name.dialogs } 
                            id = { name.id }  
                            newMessage = { name.newMessage }
                            setNewMessage = { setNewMessage }
                            addMessageKey = { addMessageKey }
                            addMessageClick = { addMessageClick } /> }  
            />
        )
    } )

    return (
        <div className = { style.dialogsWrapper }>

            <DialogName dialogsPage = { dialogsPage } />
            { dialogNamesMessages }
            {/* <Route path = '/dialogs'
                    render = { () => <div>Please, choose a dialog of create a new one.</div>}   /> */}
        </div>
    )
}

export default Dialogs;