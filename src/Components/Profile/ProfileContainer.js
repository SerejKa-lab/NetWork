import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import { setUserProfile } from '../../Redux/profileReducer';
import withAuthRedirect from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';

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
        userProfile: state.profilePage.userProfile,
    }
}
export default compose(
    connect(mapStateToProps, { setUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)