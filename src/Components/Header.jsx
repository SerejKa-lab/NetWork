import React from 'react';
import css from './Header.module.css';

console.log(css);

const Header = () => {
    return (
        <header className={css.header}>
            <img alt='Здесь должен быть логотип' src='https://img2.freepng.ru/20180419/kle/kisspng-logo-canon-clip-art-icon-round-logo-design-5ad87fcf006098.6307124815241379350016.jpg'></img>
        </header>
    )
}

export default Header;