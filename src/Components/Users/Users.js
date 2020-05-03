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

    const showPagginator = () => setPagginator(true)
    const hidePagginator = () => setPagginator(false)


    const { users, isLoading, currentPage, pagesCount } = props;

    const usersList = users.map((user) =>
        <UserContainer user={user} key={user.id} />);

    return (
        <div className={styles.usersPage}>
            {isLoading && <Preloader className={styles.preloader} />}
            {pagginator
                ? <div className={styles.navigationBlock}>
                    <Pagginator
                        startPage={1} finishPage={pagesCount}
                        currentPage={currentPage} dispatchNewPage={setPageOnEvent} />
                    <span className={styles.showHideLink} onClick={hidePagginator}>Hide</span>

                </div>
                : <div className={styles.navigationBlock}>
                    <span className={styles.showHideLink} onClick={showPagginator}>Pagginator</span>
                </div>
            }

            {usersList}
            {currentPage === pagesCount
                && <div className={styles.lastPage}>You have reached the last page...</div>}
        </div>
    )
}


export default Users;