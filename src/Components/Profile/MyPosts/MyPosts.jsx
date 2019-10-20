import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ postsData }) => {

    let postComponent = postsData.map((post) => {
        return (
            <div key = {post.id}>
                <Post {...post} />
            </div>
        )
    })

    return (
        <div className={style.posts}>
            <div className={style.myPosts}>
                My posts
            </div>
            <div className={style.newPost}>
                New post
            </div>
            {postComponent}
        </div>
    )
}

export default MyPosts;