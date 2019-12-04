import React from 'react';
import * as Axios from 'axios';
import Users from './Users';


export default class UsersAPIContainer extends React.Component {

    componentDidMount() {
        const { pageSize, currentPage } = this.props;
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`)
            .then(Response => {
                const { items, totalCount } = Response.data;
                this.props.setUsers(items, totalCount)
            })
    }

    setUsers = (page, inList) => {
        const { pageSize } = this.props;
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${page}`)
            .then(Response => {
                const { items, totalCount } = Response.data;
                this.props.setUsers(items, totalCount, inList)
            })
    }

    render() {
        const { users, pageSize, pagesCount, currentPage } = this.props;
        const { toggleFollow, setCurrentPage } = this.props;
        return(
            <Users 
                users={users} pageSize={pageSize} pagesCount={pagesCount} currentPage={currentPage}
                toggleFollow={toggleFollow} setCurrentPage={setCurrentPage} setUsers={this.setUsers} />
        )
    }

}


