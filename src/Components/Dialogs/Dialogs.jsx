import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogNames}>
                <div className={style.active}>
                    ConversationName1
               </div>
                <div className={style.name}>
                    ConversationName2
               </div>
                <div className={style.name}>
                    ConversationName3
               </div>
                <div className={style.name}>
                    ConversationName4
               </div>
            </div>
            <div className={style.conversations}>
                <div className={style.conversation}>
                    Conversation1
                </div>
                <div className={style.conversation}>
                    Conversation2
                </div>
                <div className={style.conversation}>
                    Conversation3
                </div>
                <div className={style.conversation}>
                    Conversation4
                </div>
            </div>
        </div>
    )
}

export default Dialogs;