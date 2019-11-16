import React from 'react';
import style from './Dialogs.module.css';
import DialogName from './DialogName/DialogName';
import { Route } from 'react-router-dom';
import Messages from './Messages/Messages';




const Dialogs = ( props ) => {

    const { dialogsPage } = props;
    const { callBacks } = props;
    
    let dialogNamesMessages = dialogsPage.map( (name, index) => {
        let path = '/dialogs/' + name.path;
        return(
            <Route path = { path } key= { index }
                    render = { () => <Messages 
                            messages = { name.dialogs } 
                            id = { name.id }
                            newMessage = { name.newMessage }
                            callBacks = { callBacks } /> }  
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