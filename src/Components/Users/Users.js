import React, { useState } from 'react';
import styles from './Users.module.css';
import Pagginator from './Pagginator/Pagginator';
import Preloader from '../Common/Preloader/Preloader';
import UserContainer from './User/UserContainer';


const Users = (props) => {

    const [pagginator, setPagginator] = useState(false)

    const setPageOnEvent = (page, inList) => {
        if (page !== props.currentPage) {
            props.setUsers(page, inList);
        }
    }

    const showMoreUsers = () => {
        const { currentPage, pagesCount } = props;
        if (currentPage < pagesCount) {
            setPageOnEvent(currentPage + 1, true);
        }
    }

    const showPagginator = () => setPagginator(true)
    const hidePagginator = () => setPagginator(false)


    const { users, isLoading, currentPage, pagesCount } = props;
    const disabled = currentPage === pagesCount ? true : false

    const usersList = users.map((user) =>
        <UserContainer user={user} key={user.id} />);

    return (
        <div className={styles.usersPage}>
            {isLoading && <Preloader className={styles.preloader} />}
            {pagginator
                ? <div>
                    <button onClick={showMoreUsers} disabled={disabled}>Show more</button>
                    <Pagginator
                        startPage={1} finishPage={pagesCount}
                        currentPage={currentPage} dispatchNewPage={setPageOnEvent} />
                    <p className={styles.pagginatorLink} onClick={hidePagginator}>Hide</p>

                </div>
                : <div>
                    <button onClick={showMoreUsers} disabled={disabled}>Show more</button>
                    <p className={styles.pagginatorLink} onClick={showPagginator}>Pagginator</p>
                </div>
            }

            {usersList}
        </div>
    )
}


export default Users;