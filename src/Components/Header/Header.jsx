import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className={style.header}>
            <Link to='/profile' exact>
                <img alt='Здесь должен быть логотип' src='https://img2.freepng.ru/20180419/kle/kisspng-logo-canon-clip-art-icon-round-logo-design-5ad87fcf006098.6307124815241379350016.jpg'></img>
            </Link>
        </header>
    )
}

export default Header;