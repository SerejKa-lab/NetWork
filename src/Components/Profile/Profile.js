import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    const {myId} = props
    const {userId, profileIsLoading} = props.userProfile 
    
    return (
        <div className={style.profile}>
            <ProfileInfo {...props} />
            { myId === userId && !profileIsLoading 
                && <MyPostsContainer />}
        </div>
    )
}

export default Profile;