import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Profile from './Profile';
import { setUserProfile } from '../../Redux/profileReducer';
import { profileAPI } from '../../Api/api'

class ProfileContainer extends React.Component {
   
    componentDidMount(){
        this.setUserProfile()
    }

    setUserProfile = () => {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : 1034 ;
        profileAPI.setUserProfile(userId)
        .then( Response => {
            this.props.setUserProfile(Response.data)
        } )
    }
    
    
    render() {
        return <Profile userProfile={this.props.userProfile} />
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile
    }
}
export default connect(mapStateToProps, { setUserProfile })( withRouter(ProfileContainer) );