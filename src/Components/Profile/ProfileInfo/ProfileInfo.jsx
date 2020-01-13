import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileContacts from './ProfileContacts/ProfileContacts';
import AboutMe from './AboutMe/AboutMe';
import LookingForAJob from './LookingForAJob/LookingForAJob';


const ProfileInfo = (props) => {
    const { userProfile, myId } = props;
    const { profileIsLoading, contacts, fullName, aboutMe, status, statusIsLoading, userId,
            lookingForAJob, lookingForAJobDescription: LFAJDescription }  = props.userProfile;

    if (!userProfile)
        return <Preloader />
    else {

        const userPhotoLink = userProfile.photos.large 
            ? userProfile.photos.large 
            : require('../../../Assets/Images/userPhoto.jpeg')

        return (
            profileIsLoading
                ? <Preloader />
                : <section className={styles.profileInfo}>
                    <div className={styles.profilePhoto}>
                        <img alt='avatar' src={userPhotoLink}></img>
                    </div>
                    <div className={styles.descriprion}>
                        <AboutMe fullName={fullName} aboutMe={aboutMe} status={status} 
                            statusIsLoading={statusIsLoading} myId={myId} userId={userId} />
                        <LookingForAJob lookingForAJob={lookingForAJob} LFAJDescription={LFAJDescription} />
                        <ProfileContacts contacts={contacts} />
                    </div>

                </section>
        )
    }
}

export default ProfileInfo;