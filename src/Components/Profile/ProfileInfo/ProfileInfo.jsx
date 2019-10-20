import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={style.image}>
                <img alt = 'Profile' src="https://s1.1zoom.me/big7/297/Canada_Mountains_Scenery_488936.jpg"></img>
            </div>
            <div className={style.description}>
                Avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo;