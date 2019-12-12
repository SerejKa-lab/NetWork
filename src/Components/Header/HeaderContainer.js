import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from './Header';
import {setAuthData} from '../../Redux/authReducer';


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true } )
            .then(res => { 
                if (res.data.resultCode === 0) {
                    this.props.setAuthData({...res.data.data, isAuth: true})
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({ login: state.auth.login, isAuth: state.auth.isAuth })

export default connect(mapStateToProps, {setAuthData})(HeaderContainer);