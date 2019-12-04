import { connect } from 'react-redux';
import { toggleFollow, setUsers, setCurrentPage, toggleIsLoading } from '../../Redux/usersReducer';
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

const actions = { toggleFollow, setUsers, setCurrentPage, toggleIsLoading };

const UsersContainer = connect(mapStateToProps, actions)(UsersAPIContainer);
export default UsersContainer;