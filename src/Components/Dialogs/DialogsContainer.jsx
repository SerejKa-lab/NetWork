import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, setNewMessageTextActionCreator } from './../../Redux/dialogsReducer';




const DialogsContainer = ( { store } ) => {

    const dialogsPage = store.getState().dialogsPage;
    const { dispatch } = store;

    const addMessageClick  = ( id ) => {
        let action = addMessageActionCreator( id );
        dispatch( action );
    }

    const addMessageKey = ( id ) => {
        let action = addMessageActionCreator( id );
        dispatch( action );
    }

    const setNewMessage = ( id, value ) => {
        let action = setNewMessageTextActionCreator( id, value );
        dispatch(action);
    }

    return (
        <Dialogs 
            dialogsPage = { dialogsPage }
            setNewMessage = { setNewMessage }
            addMessageKey = { addMessageKey }
            addMessageClick = { addMessageClick }  />
    )
}

export default DialogsContainer;