import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setAuthData} from '../../Redux/authReducer';


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuthData()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({ login: state.auth.login, isAuth: state.auth.isAuth })

export default connect(mapStateToProps, {setAuthData})(HeaderContainer);