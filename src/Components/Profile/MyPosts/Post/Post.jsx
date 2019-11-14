import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    
    return (

        <div className={style.item}>
            <img alt = 'avatar' src= {props.profileImage}></img>
            {' '+props.name} says: <span>{props.message}</span>
            <div className = {style.like}>
                <img alt = 'like' src = { props.likesImage } ></img>
                <span>{props.like}</span>
            </div>
        </div>
    )
}

export default Post;