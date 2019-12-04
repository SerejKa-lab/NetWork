import React from 'react';
import styles from './Users.module.css';
import User from './User/User';
import preloader from '../../Assets/Images/preloader.svg';


class Users extends React.Component {

    state = {
        inputError: false,
        displayNumber: null,
        pagginator: false,
        disabled: false
    }

    componentDidMount() { this.setState({ displayNumber: this.props.currentPage }) };


    setEventPage = (page, inList) => {
        if (page !== this.props.currentPage) {
            this.props.setCurrentPage(page);
            this.props.setUsers(page, inList);
        }
    }

    showMoreUsers = () => {
        const {currentPage, pagesCount} = this.props;
        if (currentPage < pagesCount) {
            this.setEventPage(currentPage+1, true);
            currentPage+1 === pagesCount
                ? this.setState({ displayNumber: currentPage+1, disabled: true })
                : this.setState({ displayNumber: currentPage+1 })
        }
    }

    setPageOnEvent = (e) => {
        const { pagesCount } = this.props;
        const nextPage = +e.currentTarget.value;
        const { disabled } = this.state;
        if (nextPage >= 1 && nextPage <= pagesCount) {
            this.setState({ inputError: false });
            nextPage === pagesCount
                ? this.setState({ disabled: true })
                : disabled && this.setState({ disabled: false })
            this.setEventPage(nextPage)
        } else this.setState({ inputError: true })
        
    }

    setPageOnKey = (e) => {
        if (e.key === 'Enter') this.setPageOnEvent(e);
    }

    setFirstLastPage = (page) => {
        page === this.props.pagesCount
            ? this.setState({ displayNumber: page, disabled: true })
            : this.setState({ displayNumber: page, disabled: false })
        this.setEventPage(page)
    }

    setDisplayValue = (e) => {
        const { pagesCount } = this.props;
        const nextPage = e.currentTarget.value;
        if (nextPage >= 1 && nextPage <= pagesCount) {
            this.setState({ inputError: false, displayNumber: nextPage })
        } else {
            this.setState({ displayNumber: nextPage })
            this.setState({ inputError: true })
        }
    }

    togglePagginator = () => {
        this.setState( { pagginator: !this.state.pagginator } )
    }

    render = () => {
        
        const {users, isLoading, currentPage, pagesCount } = this.props;
        const { toggleFollow } =this.props;
        const { inputError, pagginator } = this.state;
        
        const usersList = users.map((user) => <User user={user} toggleFollow={toggleFollow} key={user.id} />);

        return (
            <div className={styles.usersPage}>
                {isLoading && <img src={preloader} alt='preloader' className={styles.preloader} />}
                {pagginator
                    ? <section className={styles.pagginatorWrapper}>
                        <nav className={styles.paginator}>
                            {(currentPage !== 1) && <span onClick={() => this.setFirstLastPage(1)}>First</span>}
                            <input type='number' value={this.state.displayNumber}
                                min='1' max={pagesCount}
                                className={inputError ? styles.inpError : ''}
                                onClick={this.setPageOnEvent}
                                onKeyPress={this.setPageOnKey}
                                onChange={this.setDisplayValue} />
                            {(currentPage !== pagesCount)
                                && <span onClick={() => this.setFirstLastPage(pagesCount)}>Last</span>}
                        </nav>
                        <div className={styles.hidePagginator} onClick={this.togglePagginator}>Hide</div>
                    </section>
                    : <div>
                        <button onClick={this.showMoreUsers} disabled={this.state.disabled}>Show more</button>
                        <p className={styles.pagginatorLable} onClick={this.togglePagginator}>Pagginator</p>
                    </div>
                }

                {usersList}
                {this.state.pagginator
                    && <button onClick={this.showMoreUsers} disabled={this.state.disabled}>Show more</button>}
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