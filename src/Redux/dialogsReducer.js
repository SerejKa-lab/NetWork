const SET_NEW_MESSAGE_TEXT = 'SET-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state, action) => {
    
    switch ( action.type) {
        case SET_NEW_MESSAGE_TEXT: 
            state.dialogNames.forEach( (name) => {
                if ( action.id === name.id ) {
                name.newMessage = action.newMessageText;
                }
            } );
            return state;
   
        case ADD_MESSAGE:
            state.dialogNames.forEach( (name) => {
                if ( action.id === name.id && name.newMessage !== '' ) {
                    let newMessage = {
                        text: name.newMessage,
                        id: 'm2'
                    };
                name.dialogs.push(newMessage);
                name.newMessage = '';
                }
            } ); 
            return state;
        
        default: return state;
    
    }
}

export default dialogsReducer;
export const setNewMessageTextActionCreator = ( nameId, newMessageText ) => 
    ( { type: SET_NEW_MESSAGE_TEXT, id: nameId, newMessageText: newMessageText } )
export const addMessageActionCreator = ( nameId ) => ( { type: ADD_MESSAGE, id: nameId } );