import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './Login.module.css';
import { logIn } from '../../Redux/authReducer'


let Login = (props) => {

    const { handleSubmit, logIn, isAuth } = props

    const submit = (values) => logIn(values)

    if (isAuth) return (<Redirect to='/profile' />)

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit(submit)}>
            <fieldset>
                <legend>Authorization form</legend>
                <p><Field name='email' component='input' type='email' placeholder='email' /></p>
                <p><Field name='password' component='input' type='password' placeholder='Password' /></p>
                <p><Field name='rememberMe' component='input' type='checkbox'/>Remember me</p>
            </fieldset>
            <button type='submit' value='Submit' className={styles.button}>Login</button>
        </form>
    )
}

Login = reduxForm({
    form: 'login' // имя формы в state (state.form.post)
})(Login)
                

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { logIn })(Login);