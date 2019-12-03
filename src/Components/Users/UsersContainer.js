import Users from './Users';
import { connect } from 'react-redux';
import { toggleFollowAC, setUsersAC, setCurrentPageAC } from '../../Redux/usersReducer';


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        pagesCount: state.usersPage.pagesCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => dispatch( toggleFollowAC(userId) ),
        setUsers: (users, totalCount) => dispatch( setUsersAC(users, totalCount) ),
        setCurrentPage: (page) => dispatch( setCurrentPageAC(page) )
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;