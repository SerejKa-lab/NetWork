import Dialogs from './Dialogs';
import { addMessage, setMessageText } from './../../Redux/dialogsReducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../../Hoc/withAuthRedirect';


const mapStateToProps = ( state ) => {
    return {
        dialogsPage: state.dialogsPage 
    }
}


const DialogsContainer = connect( mapStateToProps, {addMessage, setMessageText} ) ( withAuthRedirect(Dialogs) )

export default DialogsContainer;