import { connect } from 'react-redux';
import { setUsers, toggleIsLoading } from '../../Redux/usersReducer';
import UsersAPIContainer from './UsersAPIContainer';


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        pagesCount: state.usersPage.pagesCount,
        isLoading: state.usersPage.isLoading
    }
}

const actionsCreators = { setUsers, toggleIsLoading };

const UsersContainer = connect(mapStateToProps, actionsCreators)(UsersAPIContainer);
export default UsersContainer;