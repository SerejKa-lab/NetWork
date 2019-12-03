import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ postsData, postText, ChangePostText, addPost }) => {

    let postComponent = postsData.map((post) => {
        return (
            <div key = {post.id}>
                <Post {...post} />
            </div>
        )
    })

    
    let onChangePostText = (e) =>  ChangePostText(e.currentTarget.value);

    let addPostOnClick = () => addPost();
   
    let addPostOnKey = (e) => { if ( e.key === 'Enter' ) addPost() }
 

    return (
        <div className={style.posts}>
            <div className={style.myPosts}>
               <h2> My posts </h2>
            </div>
            {postComponent}
            <div className={style.newPost}>
                <div>
                    <textarea 
                        value = { postText } 
                        onChange = { onChangePostText }
                        onKeyPress = { addPostOnKey }
                        cols="75" rows="3" />
                </div>
                <div>
                    <button onClick = { addPostOnClick }>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;