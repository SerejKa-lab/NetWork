import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import Pagginator from './Pagginator/Pagginator';
import Preloader from '../Preloader/Preloader';


class Users extends React.Component {

    state = {
        pagginator: false,
    }

    setEventPage = (page, inList) => {
        if (page !== this.props.currentPage) {
            this.props.setUsers(page, inList);
        }
    }

    showMoreUsers = () => {
        const {currentPage, pagesCount} = this.props;
        if (currentPage < pagesCount) {
            this.setEventPage(currentPage+1, true);
        }
    }

    togglePagginator = () => {
        this.setState( { pagginator: !this.state.pagginator } )
    }

    
    render = () => {
        
        const {users, isLoading, currentPage, pagesCount } = this.props;
        const { toggleFollow } =this.props;
        const { pagginator } = this.state;
        const disabled = currentPage === pagesCount ? true : false
        
        const usersList = users.map((user) => <User user={user} toggleFollow={toggleFollow} key={user.id} />);
        return (
            <div className={styles.usersPage}>
                {isLoading && <Preloader className={styles.preloader} />}
                {pagginator
                    ? <div>
                        <button onClick={this.showMoreUsers} disabled={disabled}>Show more</button>
                        <Pagginator
                            startPage={1} finishPage={pagesCount}
                            currentPage={currentPage} dispatchNewPage={this.setEventPage} />
                        <p className={styles.pagginatorLink} onClick={this.togglePagginator}>Hide</p>
                        
                    </div>
                    : <div>
                        <button onClick={this.showMoreUsers} disabled={disabled}>Show more</button>
                        <p className={styles.pagginatorLink} onClick={this.togglePagginator}>Pagginator</p>
                    </div>
                }

                {usersList}
            </div>
        )
    }
}


export default Users;