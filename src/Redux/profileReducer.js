const ADD_POST = 'ADD-POST';
const SET_POST_TEXT = 'SET-POST-TEXT';

const profileReducer = (state, action) => {
    if ( action.type === ADD_POST ) {
        let newPost = {
            name: 'Kolya',
            message: state.postText,
            like: '0',
            id: 'Kolya',
            profileImage: 'https://img3.goodfon.ru/original/1400x1050/7/b7/cvetok-lepestki-priroda-fon-1988.jpg'
        };
        state.postsData.push(newPost);
        state.postText = '';
    }
    if ( action.type === SET_POST_TEXT ) {
        state.postText = action.newPostText;
    }

    return state;
}

export default profileReducer;
export const addPostActionCreator = () => ({ type: ADD_POST });
export const setPostTextActionCreator = (newText) =>
        ({ type: SET_POST_TEXT, newPostText: newText });
