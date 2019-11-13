
const ADD_POST = 'ADD-POST';
const SET_POST_TEXT = 'SET-POST-TEXT';
const SET_NEW_MESSAGE_TEXT = 'SET-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';


let store = {

    _state : {
        profilePage: {
            postsData: [
                {
                    name: 'Pavel', message: 'Hi. I am fine. Thank you!', like: '15', id: 'Pavel',
                    profileImage: 'https://multik.online/wp-content/uploads/2019/07/1562444283_main_2x.jpg'
                },
                {
                    name: 'Yuriy', message: 'Hello! How are you', like: '10', id: 'Yuriy',
                    profileImage: 'https://multik.online/wp-content/uploads/2019/07/1562444283_main_2x.jpg'
                },
                {
                    name: 'Katya', message: 'Would you like a cup of tee?', like: '17', id: 'Katya',
                    profileImage: 'https://multik.online/wp-content/uploads/2019/07/1562444283_main_2x.jpg'
                },
                {
                    name: 'Masha', message: "No, i'd like a glass of juice.", like: '17', id: 'Masha',
                    profileImage: 'https://multik.online/wp-content/uploads/2019/07/1562444283_main_2x.jpg'
                },
                {
                    name: 'EasyMan', message: 'Ok. Here it is!', like: '17', id: 'EasyMan',
                    profileImage: 'https://multik.online/wp-content/uploads/2019/07/1562444283_main_2x.jpg'
                }
            ],
            postText: ''
        },

        dialogsPage: {
            dialogNames: [
                { name: 'Name1', id: 'n1', path: 'name1', 
                avatar: 'https://ds04.infourok.ru/uploads/ex/0c29/00150740-02eff148/hello_html_ff4df5c.png',
                dialogs: [
                    { text: 'Name1 Message1', id: 'm1' },
                    { text: 'Name1 Message2', id: 'm1' },
                    { text: 'Name1 Message3', id: 'm2' },
                    { text: 'Name1 Message4', id: 'm2' },
                    { text: 'Name1 Message4', id: 'm2' },
                    { text: 'Name1 Message4', id: 'm1' },
                    { text: 'Name1 Message4', id: 'm1' },
                    { text: 'Name1 Message4', id: 'm2' },
                    { text: 'Name1 Message4', id: 'm2' },
                    { text: 'Name1 Message5', id: 'm1' }], 
                newMessage: ''  
                },
                { name: 'Name2', id: 'n2', path: 'name2', 
                 avatar: 'https://ds04.infourok.ru/uploads/ex/0c29/00150740-02eff148/hello_html_ff4df5c.png',
                dialogs: [
                    { text: 'Name 2 Message1', id: 'm1' },
                    { text: 'Name 2 Message3', id: 'm2' },
                    { text: 'Name 2 Message2', id: 'm1' },
                    { text: 'Name 2 Message4', id: 'm2' },
                    { text: 'Name 2 Message4', id: 'm2' },
                    { text: 'Name 2 Message4', id: 'm1' },
                    { text: 'Name 2 Message4', id: 'm1' },
                    { text: 'Name 2 Message4', id: 'm2' },
                    { text: 'Name 2 Message4', id: 'm2' },
                    { text: 'Name 2 Message5', id: 'm1' }],
                    newMessage: ''
                },
                { name: 'Name3', id: 'n3', path: 'name3', 
                 avatar: 'https://ds04.infourok.ru/uploads/ex/0c29/00150740-02eff148/hello_html_ff4df5c.png',
                dialogs: [
                    { text: 'Name 3 Message1', id: 'm1' },
                    { text: 'Name 3 Message3', id: 'm2' },
                    { text: 'Name 3 Message2', id: 'm1' },
                    { text: 'Name 3 Message4', id: 'm2' },
                    { text: 'Name 3 Message4', id: 'm1' },
                    { text: 'Name 3 Message4', id: 'm2' },
                    { text: 'Name 3 Message4', id: 'm2' },
                    { text: 'Name 3 Message4', id: 'm1' },
                    { text: 'Name 3 Message4', id: 'm2' },
                    { text: 'Name 3 Message5', id: 'm1' }],
                    newMessage: ''
                },
                { name: 'Name4', id: 'n4', path: 'name4', 
                 avatar: 'https://ds04.infourok.ru/uploads/ex/0c29/00150740-02eff148/hello_html_ff4df5c.png',
                dialogs: [
                    { text: 'Name4 Message1', id: 'm1' },
                    { text: 'Name4 Message2', id: 'm1' },
                    { text: 'Name4 Message3', id: 'm2' },
                    { text: 'Name4 Message4', id: 'm2' },
                    { text: 'Name4 Message4', id: 'm2' },
                    { text: 'Name4 Message4', id: 'm1' },
                    { text: 'Name4 Message4', id: 'm1' },
                    { text: 'Name4 Message4', id: 'm2' },
                    { text: 'Name4 Message4', id: 'm2' },
                    { text: 'Name4 Message5', id: 'm1' }],
                    newMessage: ''
                },
                { name: 'Name5', id: 'n5', path: 'name5', 
                 avatar: 'https://ds04.infourok.ru/uploads/ex/0c29/00150740-02eff148/hello_html_ff4df5c.png',
                dialogs: [
                    { text: 'Name5 Message3', id: 'm2' },
                    { text: 'Name5 Message2', id: 'm1' },
                    { text: 'Name5 Message1', id: 'm1' },
                    { text: 'Name5 Message4', id: 'm2' },
                    { text: 'Name5 Message4', id: 'm1' },
                    { text: 'Name5 Message4', id: 'm2' },
                    { text: 'Name5 Message4', id: 'm2' },
                    { text: 'Name5 Message4', id: 'm1' },
                    { text: 'Name5 Message4', id: 'm2' },
                    { text: 'Name5 Message5', id: 'm1' }],
                    newMessage: ''
                }
            ],
        }
    
    },

    // методы, не изменяющие state
    getState() {
        return this._state;
    },

    _callSubscriber () { console.log('no subcribers availiable') },

    subscriber(observer) {                // экспортируем метод, в аргумент передается функция из "мира UI",
        this._callSubscriber = observer   // которая выполняется всякий раз при изменении state
    },

    // dispatch - метод, объединяющий все методы, изменяющие state
    dispatch( action ) {
        if ( action.type === ADD_POST ) {
            let newPost = {
                name: 'Kolya',
                message: this._state.profilePage.postText,
                like: '0',
                id: 'Kolya',
                profileImage: 'https://multik.online/wp-content/uploads/2019/07/1562444283_main_2x.jpg'
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.postText = '';
            this._callSubscriber(this._state);
        }
        if ( action.type === SET_POST_TEXT ) {
            this._state.profilePage.postText = action.newPostText;
            this._callSubscriber(this._state);
        }
        if ( action.type === SET_NEW_MESSAGE_TEXT ){
            this._state.dialogsPage.dialogNames.forEach( (name) => {
                if ( action.id === name.id ) {
                   name.newMessage = action.newMessageText;
                   this._callSubscriber(this._state);
                }
            } ) 
            
        }
        if ( action.type === ADD_MESSAGE ){
            this._state.dialogsPage.dialogNames.forEach( (name) => {
                if ( action.id === name.id && name.newMessage !== '' ) {
                    let newMessage = {
                        text: name.newMessage,
                        id: 'm2'
                    };
                   name.dialogs.push(newMessage);
                   name.newMessage = '';
                   this._callSubscriber(this._state);
                }
            } ) 
        }

    }
}

export const setNewMessageTextActionCreator = ( nameId, newMessageText ) => 
    ( { type: SET_NEW_MESSAGE_TEXT, id: nameId, newMessageText: newMessageText } )
export const addMessageActionCreator = ( nameId ) => ( { type: ADD_MESSAGE, id: nameId } );
export const addPostActionCreator = () => ({ type: ADD_POST });
export const setPostTextActionCreator = (newText) =>
        ({ type: SET_POST_TEXT, newPostText: newText });


export default store;

//делаем store объектом window, чтобы можно было к нему обратиться в любой точке программы
window.store = store;