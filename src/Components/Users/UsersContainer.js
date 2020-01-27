import React from 'react';
import { connect } from 'react-redux';
import { setUsers } from '../../Redux/usersReducer';
import Users from './Users';


class UsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) this.props.setUsers(this.props.currentPage)
    }

    render() {
        return (
            <Users {...this.props} />
        )
    }

}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        pagesCount: state.usersPage.pagesCount,
        isLoading: state.usersPage.isLoading
    }
}


export default connect(mapStateToProps, { setUsers } )(UsersContainer);