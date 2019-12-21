import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './User.module.css';


const User = (props) => {
    const { setFollow } = props;
    const { id, photos, followed, name, status, followInProgress } = props.user;
    const photoUrl = photos.small !== null ? photos.small : require('../../../Assets/Images/userPhoto.jpeg');

    const setFollowOnClick = () => setFollow(id, true)
    const setUnfollowOnClick = () => setFollow(id, false) 

    return (
        <section className={styles.user} >
            <section className={styles.avatar}>
                <NavLink to={'/profile/' + id}>
                    <img src={photoUrl} alt='avatar' className={styles.photo} />
                </NavLink>
                {followed
                    ? <button onClick={setUnfollowOnClick} disabled={followInProgress} >Unfollow</button>
                    : <button onClick={setFollowOnClick} disabled={followInProgress} >Follow</button>}
            </section>
            <section className={styles.description}>
                <div className={styles.info}>
                    <p>{name}</p>
                    <p className={styles.descriptionStatus}>{status}</p>
                </div>
                <div className={styles.location}>
                    <p>{'country'},</p>
                    <p>{'city'}</p>
                </div>
            </section>
        </section>
    )
}

export default User;