import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <section className={style.navigationContaiter}>
            <nav className={style.navigation}>
                <div className = {style.item}  >
                    <NavLink to ='/profile' activeClassName={style.active}>Profile</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/users' activeClassName={style.active}>Users</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/news' activeClassName={style.active}>News</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/music' activeClassName={style.active}>Music</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
                </div>
            </nav>
        </section>
    )
}

export default Navbar;