import React, { useState, useEffect } from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileContacts from './ProfileContacts/ProfileContacts';
import AboutMe from './AboutMe/AboutMe';
import LookingForAJob from './LookingForAJob/LookingForAJob';
import EditProfileForm from './EditProfileForm/EditProfileForm';


const ProfileInfo = (props) => {
    const { userProfile, myId, setProfilePhoto, editMyProfile } = props;
    const { profileIsLoading, statusIsLoading, profileIsEditing } = props.profileProgress;
    const { contacts, fullName, aboutMe, status, userId,
        lookingForAJob, lookingForAJobDescription: LFAJDescription } = props.userProfile;

    const setUserPhoto = (e) => {
        if (e.target.files.length) setProfilePhoto(e.target.files[0])
    }

    useEffect(()=>{setEditMode(false)}, [userId])

    const [editMode, setEditMode] = useState(false); // react hook useState

    if (!userProfile)   // profile undefined check
        return <Preloader />
    else {

        const userPhotoLink = userProfile.photos.large
            ? userProfile.photos.large
            : require('../../../Assets/Images/userPhoto.jpeg')

        const submit = (values) => {
            if (values !== userProfile) {
                editMyProfile({...userProfile, ...values})
                    .then(() => setEditMode(false))
            } else setEditMode(false)
        }

        return (
            profileIsLoading
                ? <Preloader />
                : <section className={styles.profileInfo}>
                    <div className={styles.profilePhoto}>
                        <img alt='avatar' src={userPhotoLink}></img>
                        {!editMode && myId === userId &&        //show block to profile owner
                            <div className={styles.profileInfo_buttons}>
                                <label htmlFor='choosePhoto'>Choose photo</label>
                                <input type='file' id='choosePhoto' onChange={setUserPhoto}/>
                                <button onClick={() => setEditMode(true)}>Edit profile</button>
                            </div>
                        }
                    </div>
                    {!editMode &&
                        <div className={styles.profileInfo_userInfo}>
                            <AboutMe fullName={fullName} aboutMe={aboutMe} status={status}
                                statusIsLoading={statusIsLoading} myId={myId} userId={userId} />
                            <LookingForAJob lookingForAJob={lookingForAJob} LFAJDescription={LFAJDescription} />
                            <ProfileContacts contacts={contacts} />
                            {profileIsEditing && <Preloader width='25px'/>}
                        </div>}
                    { editMode && myId === userId &&
                       <EditProfileForm
                            profileContacts={userProfile.contacts} 
                            initialValues={userProfile} 
                            profileIsEditing={profileIsEditing}
                            onSubmit={submit} />
                    }
                </section>
        )
    }
}

export default ProfileInfo;