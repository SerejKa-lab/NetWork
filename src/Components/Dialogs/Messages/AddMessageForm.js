import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './Messages.module.css'
import { TextArea } from '../../Common/FormControle/FormControle';
import { maxLength } from '../../../Utils/Validators';

const maxLength100 = maxLength(100)

const AddMessageForm = (props) => {
    const { handleSubmit, reset, addMessage, dialogId, messageId } = props;

    const sendMessage = (values) => {
        if (values.newMessage) {
            addMessage(dialogId, messageId, values.newMessage)
            reset()
        }
    }

    return (
        <form onSubmit={handleSubmit(sendMessage)} className={styles.addMessageForm}>
            <Field 
                name='newMessage' 
                type='text' 
                component={TextArea} 
                validate={[maxLength100]}
            />
            <button type='submit'>Send message</button>
        </form>
    )
}

export default reduxForm({ form: 'newMessage' })(AddMessageForm)
