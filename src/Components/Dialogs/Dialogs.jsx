import React from 'react';
import style from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import { Route } from 'react-router-dom';
import MessagesContainer from './Messages/MessagesContainer';




const Dialogs = ( props ) => {

    const { dialogsPage, store } = props;

    let dialogNamesMessages = dialogsPage.map( (name) => {
        let path = '/dialogs/' + name.path;
        return(
            <Route path = { path }
                    render = { () => <MessagesContainer 
                            store = { store }
                            messages = { name.dialogs } 
                            id = { name.id }  
                            newMessage = { name.newMessage } /> }  
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