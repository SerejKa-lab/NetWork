import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogName = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialog}>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>
            {props.text}
         </div>
    )
}

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogNames}>
                <DialogName name='Name1' id='n1' />
                <DialogName name='Name2' id='n2' />
                <DialogName name='Name4' id='n3' />
                <DialogName name='Name4' id='n4' />
            </div>
            <div className={style.messages}>
                <Message text='Message1' />
                <Message text='Message2' />
                <Message text='Message3' />
                <Message text='Message4' />
            </div>
        </div>
    )
}

export default Dialogs;