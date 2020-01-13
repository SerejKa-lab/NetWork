import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength } from '../../../Utils/Validators';
import { Input } from '../../Common/FormControle/FormControle';

const maxLength100 = maxLength(100);

let AddPostForm = (props) => {
    const {handleSubmit, reset, addPost} = props

    const addPostAction = (values) => {
        addPost(values.newPost)
        reset()
    }
    
    return (
        <form onSubmit={handleSubmit(addPostAction)} className={styles.newPostForm}>
            <Field 
                name='newPost' 
                type='text' 
                component= {Input} 
                validate = {[required, maxLength100]}
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
            <h2> My posts </h2>
            <div className={styles.myPosts}>
                {postComponent}
            </div>
            <AddPostForm addPost={addPost} />
        </div>
    )
}


export default MyPosts;