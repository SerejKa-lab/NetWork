import React from 'react';
import style from './Messages.module.css';




const Messages = ({ dialogBox }) => {

    let firstTalker = dialogBox[0].id;
    const messagesArray = dialogBox.map((message) => {

        let messageStyle = (message.id === firstTalker) ?
            style.talker + ' ' + style.talkerFirst : `${style.talker} ${style.talkerSecond}`;


        return (
            <div className={messageStyle} key={message.id}>
                {message.text}
            </div>
        )
    })

    let inputText = React.createRef();
    const onAddClick  = () => {
        alert( inputText.current.value )
    }

    return (
        <div className={style.messages}>
            {messagesArray}
            <textarea ref = { inputText } cols="60" rows="3"></textarea>
            <button onClick = { onAddClick } >Add message</button>
        </div>
    )
}

export default Messages;