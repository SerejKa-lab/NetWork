import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={style.posts}>
            <div className={style.myPosts}>
                My posts
            </div>
            <div className={style.newPost}>
                New post
            </div>
            <Post name='Yury' message='Hello! How are you' like='10' />
            <Post name='Exibitor' message='Hi. I am fine. Thank you!' like='15' />
            <Post name='Cultivator' message='Would you like a cup of tee?' like='17' />
        </div>
    )
}

export default MyPosts;