import React from 'react';
import Dialogs from './Dialogs';




const DialogsContainer = ( { store } ) => {

    const dialogsPage = store.getState().dialogsPage;

    return (
        <Dialogs dialogsPage = { dialogsPage } store = { store } />
    )
}

export default DialogsContainer;