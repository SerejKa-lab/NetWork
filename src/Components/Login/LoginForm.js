
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './Login.module.css';
import {required} from '../../Utils/Validators';
import { Input } from '../Common/FormControle/FormControle'


let LoginForm = ({ handleSubmit, error }) => {

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <fieldset>
                <legend className={styles.legend}>Authorization form</legend>
                <div className={styles.authField}>
                    <Field
                        name='email' type='email'
                        component={Input} placeholder='email'
                        validate={[required]}
                    />
                </div>
                <div className={styles.authField}>
                    <Field
                        name='password' type='password'
                        component={Input} placeholder='Password'
                        validate={[required]}
                    />
                </div>
                <div className={styles.authField}><Field name='rememberMe' component='input' type='checkbox' />Remember me</div>
            </fieldset>
            <p className={styles.loginError}>{error}</p>
            <button type='submit' value='Submit' className={styles.submitButton}>Login</button>
        </form>
    )
}

export default reduxForm({ form: 'login' })(LoginForm)