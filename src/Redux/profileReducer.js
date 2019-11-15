const ADD_POST = 'ADD-POST';
const SET_POST_TEXT = 'SET-POST-TEXT';

let initialState = {
    postsData: [
        {
            name: 'Pavel', message: 'Hi. I am fine. Thank you!', like: '15', id: 'Pavel',
            profileImage: 'https://img3.goodfon.ru/original/1400x1050/7/b7/cvetok-lepestki-priroda-fon-1988.jpg',
            likesImage: 'https://i.pinimg.com/474x/db/3a/bb/db3abbe34ca1a4568b408971cf4621ba.jpg'
        },
        {
            name: 'Yuriy', message: 'Hello! How are you', like: '10', id: 'Yuriy',
            profileImage: 'https://img3.goodfon.ru/original/1400x1050/7/b7/cvetok-lepestki-priroda-fon-1988.jpg',
            likesImage: 'https://i.pinimg.com/474x/db/3a/bb/db3abbe34ca1a4568b408971cf4621ba.jpg'
        },
        {
            name: 'Katya', message: 'Would you like a cup of tee?', like: '17', id: 'Katya',
            profileImage: 'https://img3.goodfon.ru/original/1400x1050/7/b7/cvetok-lepestki-priroda-fon-1988.jpg',
            likesImage: 'https://i.pinimg.com/474x/db/3a/bb/db3abbe34ca1a4568b408971cf4621ba.jpg'
        },
        {
            name: 'Masha', message: "No, i'd like a glass of juice.", like: '17', id: 'Masha',
            profileImage: 'https://img3.goodfon.ru/original/1400x1050/7/b7/cvetok-lepestki-priroda-fon-1988.jpg',
            likesImage: 'https://i.pinimg.com/474x/db/3a/bb/db3abbe34ca1a4568b408971cf4621ba.jpg'
        },
        {
            name: 'EasyMan', message: 'Ok. Here it is!', like: '17', id: 'EasyMan',
            profileImage: 'https://img3.goodfon.ru/original/1400x1050/7/b7/cvetok-lepestki-priroda-fon-1988.jpg',
            likesImage: 'https://i.pinimg.com/474x/db/3a/bb/db3abbe34ca1a4568b408971cf4621ba.jpg'
        }
    ],
    postText: ''
}

const profileReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) { 
        case ADD_POST:
            if ( state.postText.trim() !== '' ) {  
                let newPost = {
                    name: 'Kolya',
                    message: state.postText,
                    like: '0',
                    id: 'Kolya',
                    profileImage: 'https://img3.goodfon.ru/original/1400x1050/7/b7/cvetok-lepestki-priroda-fon-1988.jpg',
                    likesImage: 'https://i.pinimg.com/474x/db/3a/bb/db3abbe34ca1a4568b408971cf4621ba.jpg'
                };
                state.postText = '';
                state.postsData.push(newPost);
                return state;
            }
    
        case SET_POST_TEXT:
            if ( action.newPostText !== undefined ) {   
                state.postText = action.newPostText;
                return state;
            }

        default: return state;
}
}

export default profileReducer;
export const addPostActionCreator = () => ({ type: ADD_POST });
export const setPostTextActionCreator = (newText) =>
        ({ type: SET_POST_TEXT, newPostText: newText });
