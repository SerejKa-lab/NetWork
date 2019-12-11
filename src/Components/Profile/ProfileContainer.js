import React from 'react';
import Profile from './Profile';
import Axios from 'axios';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { setUserProfile } from '../../Redux/profileReducer';

class ProfileContainer extends React.Component {
   
    componentDidMount(){
        this.setUserProfile()
    }

    setUserProfile = () => {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : 1034 ;
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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