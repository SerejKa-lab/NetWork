import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader';


const ProfileInfo = (props) => {
    const { userProfile, userProfile: { profileIsLoading } } = props;

    if (!userProfile)
        return <Preloader />
    else {
        const getContacts = () => {
            let contacts = [];
            for (let key in userProfile.contacts) {
                if (userProfile.contacts[key]) {
                    const nextContact =
                        <li className={styles.contact} key={key}>
                            <a href={userProfile.contacts[key]}
                                target='_blank' rel='noopener noreferrer'>{key} </a>
                        </li>
                    contacts = [...contacts, nextContact]
                }
            }
            return contacts
        }

        const contactsArr = getContacts()
        const userPhotoLink = userProfile.photos.large ? userProfile.photos.large : require('../../../Assets/Images/userPhoto.jpeg')

        return (
            profileIsLoading
                ? <Preloader />
                : <section className={styles.profileInfo}>
                    <div className={styles.profilePhoto}>
                        <img alt='avatar' src={userPhotoLink}></img>
                    </div>
                    <div className={styles.descriprion}>
                        <div className={styles.aboutMeBlock}>
                            <h2>{userProfile.fullName}</h2>
                            <p className={styles.aboutMe}>{userProfile.aboutMe}</p>
                        </div>
                        {userProfile.lookingForAJob
                            && <div className={styles.lookingForAJob}>
                                <img alt='lookingForAJob' src={require('../../../Assets/Images/lookingForAJob.png')} />
                                <div className={styles.LFAJ_descriprion}>
                                    <span className={styles.LFAJ_descriprion_header}>Looking for a vacancy:</span>
                                    <span className={styles.LFAJ_descriprion_vacancy}>{userProfile.lookingForAJobDescription}</span>
                                </div>
                            </div>
                        }
                        {contactsArr.length !== 0
                            && <div className={styles.contactsBlock}>
                                <p className={styles.contactsHeader}>Contacts:</p>
                                <ul className={styles.contacts}>
                                    {contactsArr}
                                </ul>
                            </div>
                        }
                    </div>

                </section>
        )
    }
}

export default ProfileInfo;