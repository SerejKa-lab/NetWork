import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLength } from '../../../Utils/Validators';
import { Input } from '../../Common/FormControle/FormControle';

const maxLength1000 = maxLength(1000);

let AddPostForm = ({handleSubmit, reset, addPost}) => {

    const addPostAction = (values) => {
        if (values.newPost) {
            addPost(values.newPost)
            reset()
        }
    }

    return (
        <form onSubmit={handleSubmit(addPostAction)} className={styles.newPostForm}>
            <Field 
                name='newPost' 
                type='text' 
                component= {Input} 
                validate = {[maxLength1000]}
            />
            <button type='submit'>Add post</button>
        </form>
    )
}

AddPostForm = reduxForm({ form: 'addPost' })(AddPostForm)

const MyPosts = ({ postsData, addPost }) => {

    const postComponent = postsData.map((post) => <Post {...post} key={post.id} />)

    return (
        <div className={styles.postsContainer}>
            <div className={styles.myPosts}>
                <AddPostForm addPost={addPost} />
                {postComponent}
            </div>
        </div>
    )
}


export default MyPosts;