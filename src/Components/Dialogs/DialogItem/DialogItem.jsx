import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './DialogsItem.module.css'

const DialogItem = (props) => {
    return (
        <div className={style.wrapper}>
            <NavLink to={'/messages/' + props.id} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    );
}
export default DialogItem;


