import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';
import ProfileContacts from './ProfileContacts/ProfileContacts';
import AboutMe from './AboutMe/AboutMe';


const ProfileInfo = (props) => {
    const { userProfile } = props;
    const { profileIsLoading, contacts, fullName, aboutMe }  = props.userProfile;

    if (!userProfile)
        return <Preloader />
    else {

        const userPhotoLink = userProfile.photos.large ? userProfile.photos.large : require('../../../Assets/Images/userPhoto.jpeg')

        return (
            profileIsLoading
                ? <Preloader />
                : <section className={styles.profileInfo}>
                    <div className={styles.profilePhoto}>
                        <img alt='avatar' src={userPhotoLink}></img>
                    </div>
                    <div className={styles.descriprion}>
                        <AboutMe fullName={fullName} aboutMe={aboutMe} />
                        {userProfile.lookingForAJob
                            && <div className={styles.lookingForAJob}>
                                <img alt='lookingForAJob' src={require('../../../Assets/Images/lookingForAJob.png')} />
                                <div className={styles.LFAJ_descriprion}>
                                    <span className={styles.LFAJ_descriprion_header}>Looking for a vacancy:</span>
                                    <span className={styles.LFAJ_descriprion_vacancy}>{userProfile.lookingForAJobDescription}</span>
                                </div>
                            </div>
                        }
                        <ProfileContacts contacts={contacts} />
                    </div>

                </section>
        )
    }
}

export default ProfileInfo;