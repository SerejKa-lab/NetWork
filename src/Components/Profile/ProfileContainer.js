import React from 'react';
import Profile from './Profile';
import Axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../Redux/profileReducer';

class ProfileContainer extends React.Component {
   
    componentDidMount(){
        this.setUserProfile()
    }

    setUserProfile = () => {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/1034`)
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
export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);