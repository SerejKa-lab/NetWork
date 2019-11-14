import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ store } ) => {
    return (
        <div className={style.profileContent}>
            <ProfileInfo />
            <MyPostsContainer store = { store } />
        </div>
    )
}

export default Profile;