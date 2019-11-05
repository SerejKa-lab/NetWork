import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ postsData, addPost, postText, setPostText }) => {

    let postComponent = postsData.map((post) => {
        return (
            <div key = {post.id}>
                <Post {...post} />
            </div>
        )
    })


    let PostRef = React.createRef();

    let onChangePostText = () => {
        let text = PostRef.current.value;
        setPostText( text );
    }

    return (
        <div className={style.posts}>
            <div className={style.myPosts}>
               <h2> My posts </h2>
            </div>
            {postComponent}
            <div className={style.newPost}>
                <div>
                    <textarea ref = { PostRef } onChange = { onChangePostText } value = { postText } cols="70" rows="3"></textarea>
                </div>
                <div>
                    <button onClick = { addPost }>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;