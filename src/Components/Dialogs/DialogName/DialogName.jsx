import React from 'react';
import style from './DialogName.module.css';
import { NavLink } from 'react-router-dom';


const DialogName = ( { dialogsPage } ) => {

    const namesArray = dialogsPage.map( (el) => {
        let linkPath = '/dialogs/' + el.path;
        return (
            <div className={style.dialog} key={el.id}>
                <NavLink to={linkPath} activeClassName={style.active}>
                    <img src = { el.avatar } alt="Avatar"/> {el.name}</NavLink>
            </div>
        )
    }
    )

    return (
        <div className={style.dialogNamesWrapper}>
            <div className={style.dialogNames}>
                { namesArray }
            </div>
        </div>
    )
}

export default DialogName;