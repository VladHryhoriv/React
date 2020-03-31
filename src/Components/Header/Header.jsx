import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
import exit from '../../assmeut/UserPhoto/exit.jpg'

const Header = (props) => {
    return (
        <header className={style.header}>
            <link href={`https://fonts.googleapis.com/css?family=Trade+Winds&display=swap`} rel="stylesheet"></link>
            <div className={style.text}>
                Hill`s
                   <div className={style.login}>{props.isAuth
                    ? <div className={style.wrapperName}><div className={style.name}>{props.login}</div>
                        <div className={style.wrapperLogout}>
                            <button onClick={props.Logout} className={style.logout}>Logout
                                <img src={exit} alt="NONE" srcset="" />
                            </button>
                        </div>
                    </div>
                    : <NavLink to="" >Login</NavLink>}</div>
                <div className={style.text2}>since 1967</div>
            </div>
        </header>
    );
}
export default Header;