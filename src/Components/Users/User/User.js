import React from 'react';
import styles from './User.module.css';


const User = (props) => {
    const { toggleFollow } = props;
    const { id, photos, followed, name, status } = props.user;
    // const { country, city } = props.user.location
    const photoUrl = photos.small !== null ? photos.small : 'https://slide-share.ru/image/4613918.jpeg';

    const toggleFollowClick = () => toggleFollow(id);

    return (
        <section className={styles.user} >
            <section className={styles.avatar}>
                <img src={photoUrl} alt='avatar' className={styles.photo} />
                {followed
                ? <button onClick={toggleFollowClick} >Follow</button>
                : <button onClick={toggleFollowClick} >Unfollow</button>}
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