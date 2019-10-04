import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return(
        <div className={style.content}>
                <div>
                    <img src="https://s1.1zoom.me/big7/297/Canada_Mountains_Scenery_488936.jpg"></img>
                </div>
                <div>
                    Avatar + description
                </div>
                <MyPosts />
            </div>
    )
}

export default Profile;