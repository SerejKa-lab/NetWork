import React from 'react';
import style from './Messages.module.css';
import { setNewMessageTextActionCreator, addMessageActionCreator } from '../../../Redux/State'



const Messages = ({ newMessage, messages, dispatch, id }) => {

    let firstTalker = messages[0].id;
    const messagesArray = messages.map((message) => {

        let messageStyle = (message.id === firstTalker) ?
            style.talker + ' ' + style.talkerFirst : `${style.talker} ${style.talkerSecond}`;


        return (
            <div className={messageStyle} key={message.id}>
                {message.text}
            </div>
        )
    })

    const addMessageOnClick  = () => {
        let action = addMessageActionCreator( id );
        dispatch( action );
    }

    const addMessageOnKey = (e) => {
        if ( e.key === 'Enter' ) {
            let action = addMessageActionCreator( id );
            dispatch( action );
        }
    }

    const enterNewMessage = (e) => {
        let action = setNewMessageTextActionCreator( id, e.currentTarget.value );
        dispatch(action);
    }

    return (
        <div className={style.messages}>
            {messagesArray}
            <textarea 
                onChange = { enterNewMessage } 
                onKeyPress = { addMessageOnKey }
                value = { newMessage } 
                cols="60" rows="3"></textarea>
            <button onClick = { addMessageOnClick } >Send message</button>
        </div>
    )
}

export default Messages;