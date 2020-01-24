import React from 'react';
import like from '../../../../Assets/Images/like.png'
import styles from './Post.module.css';

const Post = (props) => {
    
    return (

        <div className={styles.post}>
            <div className={styles.postWriter}>
                <img alt = 'avatar' src= {props.profileImage}></img>
                <span><b>{props.name}</b></span>
            </div>
            <span className={styles.postMessage}>{props.message}</span>
            <div className={styles.postLike}>
                <img alt='like' src={like} ></img>
                {props.like && <span>{props.like}</span>}
            </div>
        </div>
    )
}

export default Post;