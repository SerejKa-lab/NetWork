import React from 'react';
import styles from './Messages.module.css';
import AddMessageForm from './AddMessageForm';


const Messages = ( props ) => {

    const { dialogId, messages, addMessage} = props;
    const firstTalker = messages[0].id;

    const getMessageStyle = (messageId) => {
        const {talker, talkerFirst, talkerSecond} = styles;
        return (messageId === firstTalker) 
            ? `${talker} ${talkerFirst}` 
            : `${talker} ${talkerSecond}`;
    }
    
    const messagesArray = messages.map((message, index) => 
        <div className={getMessageStyle(message.id)} key={message.id + index}>{message.text}</div> )

    return (
        <div className={styles.messages}>
            {messagesArray}
            <AddMessageForm addMessage={addMessage} dialogId={dialogId} messageId={firstTalker} />
        </div>
    )
}

export default Messages;