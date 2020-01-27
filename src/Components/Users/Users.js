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
    const disabled = (currentPage === pagesCount || isLoading) ? true : false

    const usersList = users.map((user) =>
        <UserContainer user={user} key={user.id} />);

    return (
        <div className={styles.usersPage}>
            {isLoading && <Preloader className={styles.preloader} />}
            {pagginator
                ? <div className={styles.navigationBlock}>
                    <button onClick={showMoreUsers} disabled={disabled} 
                        className={styles.showMoreButton}>Show more</button>
                    <Pagginator
                        startPage={1} finishPage={pagesCount}
                        currentPage={currentPage} dispatchNewPage={setPageOnEvent} />
                    <span className={styles.showHideLink} onClick={hidePagginator}>Hide</span>

                </div>
                : <div className={styles.navigationBlock}>
                    <button onClick={showMoreUsers} disabled={disabled} 
                        className={styles.showMoreButton}>Show more</button>
                    <span className={styles.showHideLink} onClick={showPagginator}>Pagginator</span>
                </div>
            }

            {usersList}
        </div>
    )
}


export default Users;