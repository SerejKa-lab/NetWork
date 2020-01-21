import React, { useState } from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileContacts from './ProfileContacts/ProfileContacts';
import AboutMe from './AboutMe/AboutMe';
import LookingForAJob from './LookingForAJob/LookingForAJob';
import EditProfileForm from './EditProfileForm/EditProfileForm';


const ProfileInfo = (props) => {
    const { userProfile, myId } = props;
    const { profileIsLoading, statusIsLoading, profileIsEditing } = props.profileProgress;
    const { contacts, fullName, aboutMe, status, userId,
        lookingForAJob, lookingForAJobDescription: LFAJDescription } = props.userProfile;

    const [editMode, setEditMode] = useState(false); // react hook useState

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
                        {!editMode && myId === userId
                            && <button onClick={() => setEditMode(true)}>Edit profile</button>}
                    </div>
                    {!editMode &&
                        <div className={styles.descriprion}>
                            <AboutMe fullName={fullName} aboutMe={aboutMe} status={status}
                                statusIsLoading={statusIsLoading} myId={myId} userId={userId} />
                            <LookingForAJob lookingForAJob={lookingForAJob} LFAJDescription={LFAJDescription} />
                            <ProfileContacts contacts={contacts} />
                            {profileIsEditing && <Preloader width='25px'/>}
                        </div>}
                    { editMode &&
                       <EditProfileForm 
                            userProfile={userProfile} 
                            initialValues={userProfile} 
                            setEditMode={setEditMode} />
                    }
                </section>
        )
    }
}

export default ProfileInfo;