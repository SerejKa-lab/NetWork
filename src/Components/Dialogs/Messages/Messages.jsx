import React from 'react';
import style from './Messages.module.css';



const Messages = ( props ) => {

    const { id, newMessage, dialogs} = props;
    const {addMessage, setMessageText} = props;

    const firstTalker = dialogs[0].id;
    
    const messagesArray = dialogs.map((message, index) => {
        const messageStyle = (message.id === firstTalker) ? //определение стиля для сообщения
            style.talker + ' ' + style.talkerFirst : `${style.talker} ${style.talkerSecond}`;

        return (
            <div className={messageStyle} key={message.id + index}>
                {message.text}
            </div>
        )
    })

    const addMessageOnClick  = () => {
        addMessage( id );
    }

    const addMessageOnKey = (e) => {
        if ( e.key === 'Enter' ) {
            addMessage( id );
        }
    }

    const enterNewMessage = (e) => {
        setMessageText( id, e.currentTarget.value );
       
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