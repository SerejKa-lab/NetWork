import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ postsData, postText, setPostText, addPost }) => {

    const postComponent = postsData.map((post) => <Post {...post} key={post.id} />)


    const onChangePostText = (e) => setPostText(e.currentTarget.value);

    const addPostOnClick = () => addPost();

    const addPostOnKey = (e) => { if (e.key === 'Enter') addPost() }


    return (
        <div className={style.postsContainer}>
            <h2> My posts </h2>
            <div className={style.myPosts}>
                {postComponent}
            </div>
            <div className={style.newPost}>
                <div>
                    <textarea
                        value={postText}
                        onChange={onChangePostText}
                        onKeyPress={addPostOnKey}
                        cols="75" rows="3" />
                </div>
                <div>
                    <button onClick={addPostOnClick}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;