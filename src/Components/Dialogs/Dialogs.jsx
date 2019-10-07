import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.conversationNames}>
                <div className={style.name}>
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
                <div>
                    Conversation1
                </div>
                <div>
                    Conversation2
                </div>
                <div>
                    Conversation3
                </div>
                <div>
                    Conversation4
                </div>
            </div>
        </div>
    )
}

export default Dialogs;