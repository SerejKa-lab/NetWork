import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import * as Axios from 'axios';


class Users extends React.Component {

    state = {
        inputError: false,
        displayNumber: null
    }

    componentDidMount() {
        const { pageSize, currentPage } = this.props;
        this.setState({ displayNumber: currentPage });
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}`)
            .then(Response => {
                const { items, totalCount } = Response.data;
                this.props.setUsers(items, totalCount)
            })
    }

    setUsers = (page) => {
        const { pageSize } = this.props;
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${page}`)
            .then(Response => {
                const { items, totalCount } = Response.data;
                this.props.setUsers(items, totalCount)
            })
    }

    setCurrentPage = (page) => {
        const {currentPage} = this.props;
        if (page !== currentPage) {
            this.props.setCurrentPage(page);
            this.setUsers(page);
        }
    }

    setPageOnEvent = (e) => {
        const { pagesCount } = this.props;
        if (+e.currentTarget.value >= 1 && +e.currentTarget.value <= pagesCount) {
            this.setState({ inputError: false });
            this.setCurrentPage(+e.currentTarget.value)
        } else this.setState({ inputError: true })
        
    }

    setPageOnKey = (e) => {
        if ( e.key === 'Enter' ) this.setPageOnEvent(e)
    }

    setFirstLastPage = (page) => {
        this.setState({ displayNumber: page })
        this.setCurrentPage(page)
    }

    setDisplayValue = (e) => {
        const { pagesCount } = this.props;
        if (e.currentTarget.value >= 1 && e.currentTarget.value <= pagesCount) {
            this.setState({ inputError: false })
            this.setState({ displayNumber: e.currentTarget.value })
        } else {
            this.setState({ displayNumber: e.currentTarget.value })
            this.setState({ inputError: true })
        }
    }

    render = () => {
        
        const {users, currentPage, pagesCount } = this.props;
        const { toggleFollow } =this.props;
        const { inputError } = this.state;
        
        const usersList = users.map((user) => <User user={user} toggleFollow={toggleFollow} key={user.id} />);

        return (
            <div className={styles.usersPage}>
                <nav className={styles.paginator}>
                    {(currentPage !== 1) && <span onClick={() => this.setFirstLastPage(1)}>First</span>}
                    <input type='number' value={this.state.displayNumber} 
                        min='1' max={pagesCount}
                        className={ inputError ? styles.inpError : '' }
                        onClick={this.setPageOnEvent}
                        onKeyPress ={this.setPageOnKey}
                        onChange={this.setDisplayValue}/>
                    {(currentPage !== pagesCount) && <span onClick={() => this.setFirstLastPage(pagesCount)}>Last</span>}
                </nav>
                {usersList}
                <div className={styles.showUsers}>
                    <button onClick={this.getUsers}>Show more</button>
                </div>
            </div>
        )
    }
}


export default Users;


// ------------- получение активной и двух соседний номеров страниц-----------
/*  const getUsersNumbers = () => {
            let numbers = [1, 2, 3];
            let newNumbers = [];
            if (currentPage > 2 && currentPage < pagesCount) {
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    newNumbers = [...newNumbers, i]
                }
                numbers = newNumbers;
            }
            if (currentPage === pagesCount) {
                numbers = [pagesCount - 2, pagesCount - 1, pagesCount]
            }
            return numbers
        }

        const pageNumbers = [
            getUsersNumbers().map((num) => 
                <span className={ num === currentPage ? styles.active: '' } 
                    onClick={() => this.setCurrentPage(num)}>{num}</span>
            )
        ] */