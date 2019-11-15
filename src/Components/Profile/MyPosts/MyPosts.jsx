import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ postsData, postText, ChangePostText, ClickAddPost, KeyAddPost }) => {

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
        ChangePostText(text);
    }

    let onAddPost = () => {
        ClickAddPost();
    }

    let onKeyAddPost = (e) => {
         if ( e.key === 'Enter' ) {
            KeyAddPost();
         }
    }

    return (
        <div className={style.posts}>
            <div className={style.myPosts}>
               <h2> My posts </h2>
            </div>
            {postComponent}
            <div className={style.newPost}>
                <div>
                    <textarea 
                        ref = { PostRef } 
                        value = { postText } 
                        onChange = { onChangePostText }
                        onKeyPress = { onKeyAddPost }
                        cols="75" rows="3"></textarea>
                </div>
                <div>
                    <button onClick = { onAddPost }>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;