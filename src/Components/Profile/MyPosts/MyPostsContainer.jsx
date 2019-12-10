import { connect } from 'react-redux';
import { addPost, setPostText } from '../../../Redux/profileReducer'
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

const MyPostsContainer = connect( mapStateToProps, {addPost, setPostText} )( MyPosts );

export default MyPostsContainer;