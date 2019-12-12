import React from 'react';
import styles from './User.module.css';
import {NavLink} from 'react-router-dom';
import axios from 'axios';


const User = (props) => {
    const { toggleFollow } = props;
    const { id, photos, followed, name, status } = props.user;
    // const { country, city } = props.user.location
    const photoUrl = photos.small !== null ? photos.small : require('../../../Assets/Images/userPhoto.jpeg');

    const setFollow = () => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},
            {withCredentials: true,
            headers: 
                {'API-KEY': '5deaa5a9-bfea-4e80-bac8-d313181506e0'}
        })
            .then( res => {
                if (res.data.resultCode === 0){
                    toggleFollow(id, true)
                }
            })
    }

    const setUnfollow = () => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            {withCredentials: true,
            headers: 
                {'API-KEY': '5deaa5a9-bfea-4e80-bac8-d313181506e0'}
        })
            .then( res => {
                if (res.data.resultCode === 0){
                    toggleFollow(id, false)
                }
            })
    }

    return (
        <section className={styles.user} >
            <section className={styles.avatar}>
                <NavLink to={'/profile/'+id}>
                    <img src={photoUrl} alt='avatar' className={styles.photo} />
                </NavLink>
                {followed
                ? <button onClick={setUnfollow} >Unfollow</button>
                : <button onClick={setFollow} >Follow</button>}
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