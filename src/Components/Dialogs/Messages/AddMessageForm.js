import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './Messages.module.css'


const AddMessageForm = (props) => {
    const { handleSubmit, reset, addMessage, dialogId, messageId } = props;

    const sendMessage = (values) => {
        if (values.newMessage) {
            if (values.newMessage.trim() !== '') {
                addMessage(dialogId, messageId, values.newMessage)
                reset()
            } else reset()
        }
    }

    return (
        <form onSubmit={handleSubmit(sendMessage)} className={styles.addMessageForm}>
            <Field name='newMessage' type='text' component='textarea' />
            <button type='submit'>Send message</button>
        </form>
    )
}

export default reduxForm({ form: 'newMessage' })(AddMessageForm)
