import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

let AddPostForm = (props) => {
    const {handleSubmit, reset, addPost} = props

    const addPostAction = (values) => {
        if (values.newPost) {
            addPost(values.newPost)
            reset()
        }
    }

    return (
        <form onSubmit={handleSubmit(addPostAction)} className={styles.newPostForm}>
            <Field name='newPost' component='input' type='text' />
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