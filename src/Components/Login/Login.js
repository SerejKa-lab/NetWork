import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './Login.module.css';
import { logIn } from '../../Redux/authReducer';
import {required} from '../../Utils/Validators';
import { Input } from '../Common/FormControle/FormControle'
import { compose } from 'redux';


let Login = (props) => {

    const { handleSubmit, logIn, isAuth, error } = props

    const submit = (values) => logIn(values)

    if (isAuth) return (<Redirect to='/profile' />)

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit(submit)}>
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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { logIn }),
    reduxForm({ form: 'login' })
) (Login);