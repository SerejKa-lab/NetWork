import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../../Redux/authReducer';
import LoginForm from './LoginForm';



const Login = ({ logIn, isAuth, captchaCheck, captchaUrl }) => {
    
    if (isAuth) return (<Redirect to='/profile' />)
    
    const submit = (formData) => { logIn(formData) }

    return <LoginForm onSubmit={submit} captchaCheck={captchaCheck} captchaUrl={captchaUrl} />
}

const mapStateToProps = ({ auth:{ isAuth, captchaCheck, captchaUrl } }) => ({
    isAuth,
    captchaCheck,
    captchaUrl
})

export default connect(mapStateToProps, { logIn })(Login);