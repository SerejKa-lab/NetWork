import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setAuthData} from '../../Redux/authReducer';
import { headerAPI } from '../../Api/api'


class HeaderContainer extends React.Component {

    componentDidMount() {
        headerAPI.login()
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