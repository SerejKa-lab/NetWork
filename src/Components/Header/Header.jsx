import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import avatar from '../../Assets/Images/avatar.png';


const Header = (props) => {
    const { login, isAuth } = props;
    return (
        <header className={style.header}>
            <Link to='/'>
                <img alt='Здесь должен быть логотип' src='https://img2.freepng.ru/20180419/kle/kisspng-logo-canon-clip-art-icon-round-logo-design-5ad87fcf006098.6307124815241379350016.jpg'></img>
            </Link>
            {
                isAuth
                ? <div className={style.login}>
                    <a href='#log'>{login}</a>
                    <img src={avatar} alt='profile'/>
                </div> 
                : <a href='#log'>Login</a> 
            }
        </header>
    )
}

export default Header;