const SET_NEW_MESSAGE_TEXT = 'SET-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = [

    {
        name: 'Name1', id: 'n1', path: 'name1',
        avatar: 'https://ds04.infourok.ru/uploads/ex/0c29/00150740-02eff148/hello_html_ff4df5c.png',
        dialogs: [
            { text: 'Name1 Message1', id: 'm2' },
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
    {
        name: 'Name2', id: 'n2', path: 'name2',
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
    {
        name: 'Name3', id: 'n3', path: 'name3',
        avatar: 'https://ds04.infourok.ru/uploads/ex/0c29/00150740-02eff148/hello_html_ff4df5c.png',
        dialogs: [
            { text: 'Name 3 Message3', id: 'm2' },
            { text: 'Name 3 Message1', id: 'm1' },
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
    {
        name: 'Name4', id: 'n4', path: 'name4',
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
    {
        name: 'Name5', id: 'n5', path: 'name5',
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
];

const dialogsReducer = (state = initialState, action) => {

    let stateCopy = [ ...state ];
    switch (action.type) {
        case SET_NEW_MESSAGE_TEXT: {
            stateCopy.forEach((name) => {
                if (action.id === name.id && action.newMessageText !== undefined) {
                    name.newMessage = action.newMessageText;
                }
            });
            return stateCopy;
        }

        case ADD_MESSAGE: {
            stateCopy.forEach((name, index) => {
                if (action.id === name.id && name.newMessage.trim() !== '') {
                    let newMessage = {
                        text: name.newMessage,
                        id: 'm2'
                    };
                    stateCopy[index] = {
                        ...name,
                        dialogs: [...name.dialogs, newMessage],
                        newMessage: ''
                    };
                }
            });
            return stateCopy;
        }

        default: return state;

    }
}

export default dialogsReducer;
export const setNewMessageTextActionCreator = (nameId, newMessageText) =>
    ({ type: SET_NEW_MESSAGE_TEXT, id: nameId, newMessageText: newMessageText })
export const addMessageActionCreator = (nameId) => ({ type: ADD_MESSAGE, id: nameId });