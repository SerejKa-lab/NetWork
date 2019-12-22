import React from 'react';
import { connect } from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import Profile from './Profile';
import { setUserProfile } from '../../Redux/profileReducer';

class ProfileContainer extends React.Component {
   
    componentDidMount(){
        this.setUserProfile()
    }

    setUserProfile = () => {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : 1034 ;
        this.props.setUserProfile(userId)
    }
    
    
    render() {
        if (!this.props.isAuth) return <Redirect to='/login' />
        return <Profile userProfile={this.props.userProfile} />
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, { setUserProfile })( withRouter(ProfileContainer) );