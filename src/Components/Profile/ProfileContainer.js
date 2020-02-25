import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import { setUserProfile, setUserStatus, setProfilePhoto, editMyProfile } from '../../Redux/profileReducer';
import withAuthRedirect from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
   
    componentDidMount(){
        this.setUserProfile()
    }

    componentDidUpdate(prevProps) {
        const {userId:prevUserId} = prevProps.match.params;
        const {userId} = this.props.match.params;
        if (userId !== prevUserId) this.setUserProfile()
    }

    setUserProfile = () => {
        const {myId} = this.props;
        const {userId} = this.props.match.params;
        const newUserId = userId ? userId : myId ;
        this.props.setUserProfile(newUserId)
        this.props.setUserStatus(newUserId)
    }
    
    
    render() {
        const {userProfile, myId, profileProgress, 
                setProfilePhoto, editMyProfile, profileIsEditing} = this.props
        return( 
            <Profile 
                myId={myId} 
                userProfile={userProfile} 
                profileProgress={profileProgress} 
                setProfilePhoto={setProfilePhoto}
                editMyProfile={editMyProfile}
                profileIsEditing={profileIsEditing}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        profileProgress: state.profilePage.profileProgress,
        profileIsEditing: state.profilePage.profileIsEditing,
        myId: state.auth.id
    }
}
export default compose(
    connect(mapStateToProps, { setUserProfile, setUserStatus, setProfilePhoto, editMyProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)