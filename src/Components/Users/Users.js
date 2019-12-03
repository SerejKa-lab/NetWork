import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import * as Axios from 'axios';


class Users extends React.Component {

   componentDidMount(){
        if (this.props.users.length === 0) {
            Axios.get('https://social-network.samuraijs.com/api/1.0/users').then(Response => {
                this.props.setUsers(Response.data.items)
            })
        }
    }
    
    getUsers = () => {
        if (this.props.users.length === 0) {
            Axios.get('https://social-network.samuraijs.com/api/1.0/users').then(Response => {
                this.props.setUsers(Response.data.items)
            })
        }
    }



    render = () => {
        debugger;
        const { toggleFollow, users } = this.props;
        const usersList = users.map((user) => <User user={user} toggleFollow={toggleFollow} key={user.id} />);
        
        return (
            <div className={styles.usersPage}>
                <h3>Welcome to UsersPage!</h3>
                {usersList}
                <div className={styles.showUsers}>
                    <button onClick={this.getUsers}>Show more</button>
                </div>
            </div>
        )
    }
}


export default Users;