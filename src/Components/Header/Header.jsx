import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import avatar from '../../Assets/Images/avatar.png'
import unlogged from '../../Assets/Images/unlogged.png'
import logo from '../../Assets/Images/network_logo.jpg'
import onClickOutside from 'react-onclickoutside'


class Header extends React.Component {

    state = {
        isDisplayed: false
    }

    handleClickOutside = () => this.setState({isDisplayed: false})

    render() {
        
        const { isDisplayed } = this.state
        const { login, isAuth, logOut } = this.props
        const logOutStyle = !isDisplayed ? `${styles.logOut} ${styles.logOut_hide}` : styles.logOut
        const loggedInStyle = !isDisplayed ? styles.loggedIn : styles.loggedIn + ' ' + styles.loggedIn_click

        const toggleLogOut = () => this.setState({isDisplayed: !isDisplayed})

        const logOutOnClick = () => {
            logOut()
            toggleLogOut()
        }

        return (
            <header className={styles.header}>
                <div className={styles.header_wrapper}>
                    <Link to='/profile'>
                        <img alt='Logo' src={logo}></img>
                    </Link>
                    {isAuth
                        ? <div className={styles.loggedIn_wraper}>
                            <div className={loggedInStyle} onClick={toggleLogOut} >
                                <span>{login}</span>
                                <img src={avatar} alt='profile' />
                            </div>
                            <span onClick={logOutOnClick} className={logOutStyle}>LogOut</span>
                        </div>
                        : <div className={styles.login}>
                            <Link to='/login'>Login</Link>
                            <img src={unlogged} alt='profile' />
                        </div>
                    }
                </div>
            </header>
        )
    }
}

export default onClickOutside(Header)