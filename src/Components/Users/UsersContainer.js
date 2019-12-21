import React from 'react';
import { connect } from 'react-redux';
import { setUsers, toggleIsLoading } from '../../Redux/usersReducer';
import { usersAPI } from '../../Api/api';
import Users from './Users';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.setUsers(this.props.currentPage)
    }

    setUsers = (page, inList) => {
        const { pageSize, toggleIsLoading } = this.props;
        toggleIsLoading(true);
        usersAPI.setUsers(pageSize, page)
            .then(Response => {
                const { items, totalCount } = Response.data;
                this.props.setUsers(items, totalCount, page, inList);
                toggleIsLoading(false)
            })
    }

    render() {
        return (
            <Users {...this.props} setUsers={this.setUsers} />
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


export default connect(mapStateToProps, { setUsers, toggleIsLoading } )(UsersContainer);