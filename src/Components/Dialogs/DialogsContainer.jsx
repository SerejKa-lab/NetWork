import Dialogs from './Dialogs';
import { addMessage, setMessageText } from './../../Redux/dialogsReducer';
import { connect } from 'react-redux';


const mapStateToProps = ( state ) => {
    return {
        dialogsPage: state.dialogsPage 
    }
}


const DialogsContainer = connect( mapStateToProps, {addMessage, setMessageText} ) ( Dialogs )

export default DialogsContainer;