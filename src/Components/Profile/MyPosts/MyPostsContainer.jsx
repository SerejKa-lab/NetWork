import React from 'react';
import { addPostActionCreator, setPostTextActionCreator } from '../../../Redux/profileReducer'
import MyPosts from './MyPosts';

const MyPostsContainer = ({ store }) => {

    const { postsData, postText } = store.getState().profilePage;
    const { dispatch } = store;

    let ChangePostText = ( text ) => {
        let action = setPostTextActionCreator( text );
        dispatch( action );
    }

    let ClickAddPost = () => {
        let action = addPostActionCreator();
        dispatch( action );
    }

    let KeyAddPost = (e) => {
        let action = addPostActionCreator();
        dispatch( action );
    }
    debugger;
    return (
        <MyPosts 
            postText = { postText } 
            postsData = { postsData } 
            ChangePostText = { ChangePostText } 
            KeyAddPost = { KeyAddPost }
            ClickAddPost = { ClickAddPost } />
    )
}

export default MyPostsContainer;