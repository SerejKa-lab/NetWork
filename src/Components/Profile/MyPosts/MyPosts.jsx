import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
            </div>
            <div className={style.active}>
                New post
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default MyPosts;