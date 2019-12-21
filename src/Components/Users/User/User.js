import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './User.module.css';
import { usersAPI } from '../../../Api/api'


const User = (props) => {
    const { toggleFollow, toggleFollowProgress } = props;
    const { id, photos, followed, name, status, followInProgress } = props.user;
    const photoUrl = photos.small !== null ? photos.small : require('../../../Assets/Images/userPhoto.jpeg');

    const setFollow = () => {
        toggleFollowProgress(id, true)
        usersAPI.setFollow(id)
            .then(res => {
                if (res.data.resultCode === 0) {
                    toggleFollow(id, true)
                    toggleFollowProgress(id, false)
                }
            })
    }

    const setUnfollow = () => {
        toggleFollowProgress(id, true)
        usersAPI.setUnfollow(id)
            .then(res => {
                if (res.data.resultCode === 0) {
                    toggleFollow(id, false)
                    toggleFollowProgress(id, false)
                }
            })
    }

    return (
        <section className={styles.user} >
            <section className={styles.avatar}>
                <NavLink to={'/profile/' + id}>
                    <img src={photoUrl} alt='avatar' className={styles.photo} />
                </NavLink>
                {followed
                    ? <button onClick={setUnfollow} disabled={followInProgress} >Unfollow</button>
                    : <button onClick={setFollow} disabled={followInProgress} >Follow</button>}
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