import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import styles from './EditProfileForm.module.css';
import { editMyProfile } from '../../../../Redux/profileReducer'
import { connect } from 'react-redux';
import { required, maxLength } from '../../../../Utils/Validators';
import { Input } from '../../../Common/FormControle/FormControle';

const maxLength1000 = maxLength(1000);

const EditProfileForm = ({handleSubmit, editMyProfile, setEditMode, userProfile, error}) => {
    
    const submit = (values)  => {
        console.log(values)
        if (values !== userProfile) {
            editMyProfile({...userProfile, ...values})
                .then( () => setEditMode(false))
            
        } else setEditMode(false)
    }

    
    return (
        <form onSubmit={handleSubmit(submit)} className={styles.editProfileForm}>
            <label>Full name</label>
            <Field name='fullName' component={Input} type='text' validate={[ required ]}/>
            <label>About me</label>
            <Field name='aboutMe' component={Input} type='text' validate={[ required, maxLength1000 ]} />
            <label className={styles.lokingFAJ}>Looking for a job</label>
            <Field name='lookingForAJob' component='input' type='checkbox' />
            <label>Vacansy you pretend</label>
            <Field name='lookingForAJobDescription' component={Input} type='text' validate={[ required, maxLength1000 ]} />
            <label>Contacts:</label>
            {error &&
                <div className={error ? styles.inputError : ''}>
                    {error}.<br />Please, enter valid URL format -> https://website.com</div>
            }
            {!error && <p className={styles.urlHint}>Please, enter valid URL format: https://website.com</p> }
            { (Object.keys(userProfile.contacts)).map((key) => 
                <div className={styles.editContactField} key={key}>
                    <span>{key}</span><br/>
                    <Field name={`contacts.${key}`} component='input' type='text' placeholder={`your ${key} URL`} />
                </div>
            ) }
            <button type="submit">Save changes</button>
        </form>
    )
}

export default compose(
    connect(null, {editMyProfile}),
    reduxForm({ form: 'editProfile' })
)(EditProfileForm)