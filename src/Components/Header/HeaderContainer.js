import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {logOut} from '../../Redux/authReducer';


class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({ login: state.auth.login, isAuth: state.auth.isAuth })

export default connect(mapStateToProps, {logOut})(HeaderContainer);