import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, setPostTextActionCreator } from '../../../Redux/State'

const MyPosts = ({ postsData, postText, dispatch }) => {

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
        let action = setPostTextActionCreator( text );
        dispatch( action );
    }

    let onAddPost = () => {
        let action = addPostActionCreator();
        dispatch( action );
    }

    let onKeyAddPost = (e) => {
         if ( e.key === 'Enter' ) {
             let action = addPostActionCreator();
             dispatch( action );
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
                        cols="70" rows="3"></textarea>
                </div>
                <div>
                    <button onClick = { onAddPost }>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;