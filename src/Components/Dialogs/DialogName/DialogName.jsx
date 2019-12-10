import React from 'react';
import style from './DialogName.module.css';
import { NavLink } from 'react-router-dom';


const DialogName = ( { nameData } ) => {

    const namesArray = nameData.map( (name, index) => {
        let linkPath = '/dialogs/' + name.path;
        return (
            <div className={style.dialog} key={index}>
                <NavLink to = { linkPath } activeClassName = { style.active }>
                    <img src = { name.avatar } alt="Avatar"/>{name.name}
                </NavLink>
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