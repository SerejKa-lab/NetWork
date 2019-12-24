import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './Login.module.css'


let Login = (props) => {

    const { handleSubmit, reset } = props

    const submit = (values) => {
        console.log(values)
    }

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit(submit)}>
            <fieldset>
                <legend>Authorization form</legend>
                <p><Field name='email' component='input' type='email' placeholder='email' /></p>
                <p><Field name='password' component='input' type='password' placeholder='Password' /></p>
                <p><Field name='rememberMe' component='input' type='checkbox'/>Remember me</p>
            </fieldset>
            <button type='button' onClick={reset} className={styles.button}>Reset</button>
            <button type='submit' value='Submit' className={styles.button}>Submit</button>
        </form>
    )
}

Login = reduxForm({
    form: 'login' // имя формы в state (state.form.post)
})(Login)
                
export default Login;