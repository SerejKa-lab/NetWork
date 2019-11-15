import React from 'react';
import Messages from './Messages';
import { addMessageActionCreator, setNewMessageTextActionCreator } from './../../../Redux/dialogsReducer';



const MessagesContainer = ( props ) => {

    const { id, newMessage, messages} = props;
    const { dispatch } = props.store;
   
    
    const addMessageClick  = () => {
        let action = addMessageActionCreator( id );
        dispatch( action );
    }

    const addMessageKey = () => {
        let action = addMessageActionCreator( id );
        dispatch( action );
    }

    const setNewMessage = ( value ) => {
        let action = setNewMessageTextActionCreator( id, value );
        dispatch(action);
    }
  

    return (
        <Messages
            id = { id } 
            newMessage = { newMessage }
            messages = { messages }
            addMessageClick = { addMessageClick }
            addMessageKey = { addMessageKey } 
            setNewMessage = { setNewMessage }   />
    )
}

export default MessagesContainer;