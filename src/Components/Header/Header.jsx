import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import avatar from '../../Assets/Images/avatar.png';
import unlogged from '../../Assets/Images/unlogged.png';


const Header = (props) => {
    const { login, isAuth, logOut } = props;
    return (
        <header className={style.header}>
            <Link to='/'>
                <img alt='Здесь должен быть логотип' src='https://img2.freepng.ru/20180419/kle/kisspng-logo-canon-clip-art-icon-round-logo-design-5ad87fcf006098.6307124815241379350016.jpg'></img>
            </Link>
            {isAuth
                ? <div className={style.login}>
                    <div className={style.loggedIn}>
                        <span>{login}</span>
                        <img src={avatar} alt='profile' />
                    </div>
                    <span onClick={ logOut } className={style.logOut}>LogOut</span>
                </div>
                : <div className={style.login}>
                    <a href='#log'>Login</a>
                    <img src={unlogged} alt='profile' />
                </div>
            }
        </header>
    )
}

export default Header;