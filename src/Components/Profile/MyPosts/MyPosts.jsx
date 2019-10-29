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

    let addPostRef = React.createRef();

    let addPost = () => {
        let newMessage = addPostRef.current.value;
        alert(newMessage);
    }

    return (
        <div className={style.posts}>
            <div className={style.myPosts}>
                My posts
            </div>
            <div className={style.newPost}>
                <h2>New post</h2>
                <div>
                    <textarea ref = { addPostRef } name="newPost" id="newPost" cols="70" rows="3"></textarea>
                </div>
                <div>
                    <button onClick = { addPost }>Add post</button>
                </div>
            </div>
            {postComponent}
        </div>
    )
}

export default MyPosts;