const avatar = require('../Assets/Images/avatar.png')

let initialState = [

    {
        name: 'Name1', id: 'n1', path: 'name1',
        avatar,
        messages: [
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
    },
    {
        name: 'Name2', id: 'n2', path: 'name2',
        avatar,
        messages: [
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
    },
    {
        name: 'Name3', id: 'n3', path: 'name3',
        avatar,
        messages: [
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
    },
    {
        name: 'Name4', id: 'n4', path: 'name4',
        avatar,
        messages: [
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
    },
    {
        name: 'Name5', id: 'n5', path: 'name5',
        avatar,
        messages: [
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
    }
];

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE: {
            const newMessage = { text: action.newMessage, id: action.messageId }
            return state.map( dialog => {
                if (dialog.id === action.dialogId) {
                    return {
                        ...dialog,
                        messages: [ ...dialog.messages, newMessage ]
                    }
                } else return dialog
            } )
        }

        default: return state;

    }
}

export default dialogsReducer;

const ADD_MESSAGE = 'ADD-MESSAGE';
export const addMessage = (dialogId, messageId, newMessage) => 
    ({ type: ADD_MESSAGE, dialogId, messageId, newMessage });