import { connect } from 'react-redux';
import { addPostActionCreator, setPostTextActionCreator } from '../../../Redux/profileReducer'
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
    const { postsData, postText } = state.profilePage;
    return (
        {
            postText: postText,
            postsData: postsData
        }
    )
}

const mapDispatchTooProps = (dispatch) => {
    return {
        ChangePostText: (text) => {
            let action = setPostTextActionCreator(text);
            dispatch(action);
        },
        ClickAddPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        },
        KeyAddPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchTooProps)(MyPosts);

export default MyPostsContainer;