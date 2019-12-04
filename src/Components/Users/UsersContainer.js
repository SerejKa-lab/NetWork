import { connect } from 'react-redux';
import { toggleFollowAC, setUsersAC, setCurrentPageAC, toggleIsLoadingAC } from '../../Redux/usersReducer';
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

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => dispatch( toggleFollowAC(userId) ),
        setUsers: (users, totalCount, inList) => dispatch( setUsersAC(users, totalCount, inList) ),
        setCurrentPage: (page) => dispatch( setCurrentPageAC(page) ),
        toggleIsLoading: (isLoading) => dispatch( toggleIsLoadingAC(isLoading) )
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
export default UsersContainer;