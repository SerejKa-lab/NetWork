import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

let store = {

    _state : {
        profilePage: {
            postsData: [
                {
                    name: 'Pavel', message: 'Hi. I am fine. Thank you!', like: '15', id: 'Pavel',
                    profileImage: 'https://img3.goodfon.ru/original/1400x1050/7/b7/cvetok-lepestki-priroda-fon-1988.jpg'
                },
                {
                    name: 'Yuriy', message: 'Hello! How are you', like: '10', id: 'Yuriy',
                    profileImage: 'https://img3.goodfon.ru/original/1400x1050/7/b7/cvetok-lepestki-priroda-fon-1988.jpg'
                },
                {
                    name: 'Katya', message: 'Would you like a cup of tee?', like: '17', id: 'Katya',
                    profileImage: 'https://img3.goodfon.ru/original/1400x1050/7/b7/cvetok-lepestki-priroda-fon-1988.jpg'
                },
                {
                    name: 'Masha', message: "No, i'd like a glass of juice.", like: '17', id: 'Masha',
                    profileImage: 'https://img3.goodfon.ru/original/1400x1050/7/b7/cvetok-lepestki-priroda-fon-1988.jpg'
                },
                {
                    name: 'EasyMan', message: 'Ok. Here it is!', like: '17', id: 'EasyMan',
                    profileImage: 'https://img3.goodfon.ru/original/1400x1050/7/b7/cvetok-lepestki-priroda-fon-1988.jpg'
                }
            ],
            postText: ''
        },

        dialogsPage: [
            
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
        
        
        sideBar: {  }
    
    },

    // методы, не изменяющие state
    getState() {
        return this._state;
    },

    _callSubscriber () { console.log('no subcribers availiable') },

    subscribe (observer) {                // экспортируем метод, в аргумент передается функция из "мира UI",
        this._callSubscriber = observer   // которая выполняется всякий раз при изменении state
    },

    // dispatch - метод, объединяющий все методы, изменяющие state
    dispatch( action ) {
        profileReducer( this._state.profilePage, action );
        dialogsReducer( this._state.dialogsPage, action );
        sideBarReducer( this._state.sideBar, action );
        this._callSubscriber(this._state);
    }
}


export default store;

//делаем store объектом window, чтобы можно было к нему обратиться в любой точке программы
window.store = store;