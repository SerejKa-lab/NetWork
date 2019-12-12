import React from 'react';
import * as Axios from 'axios';
import Users from './Users';


export default class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.setUsers(this.props.currentPage)
    }

    setUsers = (page, inList) => {
        const { pageSize, toggleIsLoading } = this.props;
        toggleIsLoading(true);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${page}`,
            {withCredentials: true,
                headers: 
                    {'API-KEY': '5deaa5a9-bfea-4e80-bac8-d313181506e0'}
        })
            .then(Response => {
                const { items, totalCount } = Response.data;
                this.props.setUsers(items, totalCount, page, inList);
                toggleIsLoading(false)
            })
    }

    render() {
        const { users, pageSize, pagesCount, currentPage, isLoading } = this.props;
        const { toggleFollow } = this.props;
        return(
            <Users 
                users={users} pageSize={pageSize} pagesCount={pagesCount} 
                currentPage={currentPage} isLoading={isLoading}
                toggleFollow={toggleFollow} setUsers={this.setUsers} />
        )
    }

}


