import { connect } from 'react-redux';
import { addPostAC, setPostTextAC } from '../../../Redux/profileReducer'
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
        ChangePostText: (text) => dispatch( setPostTextAC(text) ),
        addPost: () => dispatch( addPostAC() )
    }
}

const MyPostsContainer = connect( mapStateToProps, mapDispatchTooProps )( MyPosts );

export default MyPostsContainer;