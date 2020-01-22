import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './EditProfileForm.module.css';
import { required, maxLength } from '../../../../Utils/Validators';
import { Input } from '../../../Common/FormControle/FormControle';

const maxLength1000 = maxLength(1000);
const maxLength100 = maxLength(100);

const EditProfileForm = ({handleSubmit, error, profileContacts}) => {
    

    return (
        <form onSubmit={handleSubmit} className={styles.editProfileForm}>
            <label><b>Full name</b></label>
            <Field name='fullName' component={Input} type='text' validate={[ required, maxLength100 ]}/>
            <label><b>About me</b></label>
            <Field name='aboutMe' component={Input} type='text' validate={[ required, maxLength1000 ]} />
            <div className={styles.LFAJWrapper}>
                <label className={styles.lokingFAJ}><b>Looking for a job</b></label>
                <Field name='lookingForAJob' component='input' type='checkbox' />
            </div>
            <label><b>Vacansy you pretend</b></label>
            <Field name='lookingForAJobDescription' component={Input} type='text' validate={[ required, maxLength1000 ]} />
            <label><b>Contacts:</b></label>
            {error &&
                <div className={error ? styles.inputError : ''}>
                    {error}.<br />Valid URL format is https://website.com</div>
            }
            {!error && <p className={styles.urlHint}>Please, check valid URL format: https://website.com</p> }
            { (Object.keys(profileContacts)).map((key) => 
                <div className={styles.entireField} key={key}>
                    <span>{key}</span><br/>
                    <Field name={`contacts.${key}`} component='input' type='text' placeholder={`${key} URL`} />
                </div>
            ) }
            <button type="submit">Save changes</button>
        </form>
    )
}

export default reduxForm({ form: 'editProfile' })(EditProfileForm)