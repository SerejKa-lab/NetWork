import React from 'react';
import style from './Messages.module.css';
import { NavLink } from 'react-router-dom';




const Messages = ({ messageText }) => {

    const messagesArray = messageText.map( ( mess ) => {
        let linkPath = '/dialogs/name/' + mess.path; 

        return (
            <div className={style.message} key={mess.id}>
                <NavLink to={linkPath} activeClassName={style.active}>{mess.text}</NavLink>
            </div>
        )
    }
    )

    return (
        <div className={style.messages}>
            { messagesArray }
        </div>
    )
}

export default Messages;