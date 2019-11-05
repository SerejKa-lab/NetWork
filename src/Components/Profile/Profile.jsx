import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={style.profileContent}>
            <ProfileInfo />
            <MyPosts 
                postsData = {props.postsData} 
                postText = { props.postText } 
                dispatch = { props.dispatch } />
        </div>
    )
}

export default Profile;