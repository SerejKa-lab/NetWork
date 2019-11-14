import React from 'react';
import style from './Messages.module.css';



const Messages = ( props ) => {

    const { id, newMessage, messages} = props;
    const {setNewMessage, addMessageClick, addMessageKey } = props;

    const firstTalker = messages[0].id;
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
        addMessageClick ( id );
    }

    const addMessageOnKey = (e) => {
        if ( e.key === 'Enter' ) {
            addMessageKey( id );
        }
    }

    const enterNewMessage = (e) => {
        setNewMessage( id, e.currentTarget.value );
       
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