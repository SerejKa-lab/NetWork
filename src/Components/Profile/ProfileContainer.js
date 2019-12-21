import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
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
        return <Profile userProfile={this.props.userProfile} />
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile
    }
}
export default connect(mapStateToProps, { setUserProfile })( withRouter(ProfileContainer) );