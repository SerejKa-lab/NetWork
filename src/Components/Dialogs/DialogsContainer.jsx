import Dialogs from './Dialogs';
import { addMessageActionCreator, setNewMessageTextActionCreator } from './../../Redux/dialogsReducer';
import { connect } from 'react-redux';


const mapStateToProps = ( state ) => {
    return {
        dialogsPage: state.dialogsPage 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        callBacks: {
            addMessageClick: (id) => {
                let action = addMessageActionCreator(id);
                dispatch(action);
            },

            addMessageKey: (id) => {
                let action = addMessageActionCreator(id);
                dispatch(action);
            },

            setNewMessage: (id, value) => {
                let action = setNewMessageTextActionCreator(id, value);
                dispatch(action);
            }
        }
    }
}

const DialogsContainer = connect( mapStateToProps, mapDispatchToProps ) ( Dialogs )



export default DialogsContainer;