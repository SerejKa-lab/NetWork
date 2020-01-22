import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../../Redux/authReducer';
import LoginForm from './LoginForm';



const Login = ({ logIn, isAuth }) => {
    
    if (isAuth) return (<Redirect to='/profile' />)
    
    const submit = (formData) => { logIn(formData) }

    return <LoginForm onSubmit={submit} />
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { logIn })(Login);