import { connect } from 'react-redux';
import { addPost } from '../../../Redux/profileReducer'
import MyPosts from './MyPosts';


const mapStateToProps = (state) => ({ postsData: state.profilePage.postsData })

const MyPostsContainer = connect( mapStateToProps, {addPost} )( MyPosts );

export default MyPostsContainer;