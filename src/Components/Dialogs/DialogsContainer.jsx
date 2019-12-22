import { compose } from 'redux';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import withAuthRedirect from '../../Hoc/withAuthRedirect';
import { addMessage, setMessageText } from './../../Redux/dialogsReducer';


const mapStateToProps = ( state ) => {
    return {
        dialogsPage: state.dialogsPage 
    }
}


export default compose(
    connect( mapStateToProps, {addMessage, setMessageText} ), 
    withAuthRedirect
)(Dialogs)