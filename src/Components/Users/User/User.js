import React from 'react';
import styles from './User.module.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const User = (props) => {
    const { toggleFollow, toggleFollowProgress } = props;
    const { id, photos, followed, name, status, followInProgress } = props.user;
    const photoUrl = photos.small !== null ? photos.small : require('../../../Assets/Images/userPhoto.jpeg');

    const setFollow = () => {
        toggleFollowProgress(id, true)
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},
            {
                withCredentials: true,
                headers:
                    { 'API-KEY': '5deaa5a9-bfea-4e80-bac8-d313181506e0' }
            })
            .then(res => {
                if (res.data.resultCode === 0) {
                    toggleFollow(id, true)
                    toggleFollowProgress(id, false)
                }
            })
    }

    const setUnfollow = () => {
        toggleFollowProgress(id, true)
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            {
                withCredentials: true,
                headers:
                    { 'API-KEY': '5deaa5a9-bfea-4e80-bac8-d313181506e0' }
            })
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