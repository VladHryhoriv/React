import React from 'react';
import style from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';


const NavBar = (props) => {
    let friends = props.navBar.map((f) => <Friends name={f.name} img={f.img}/>);
    return (
        <nav className={style.nav}>
            <div><NavLink to='/profile' activeClassName={style.active}>Profile</NavLink></div>
            <div><NavLink to='/messages' activeClassName={style.active}>Messages</NavLink></div>
            <div><NavLink to='/news' activeClassName={style.active}>News</NavLink></div>
            <div><NavLink to='/music' activeClassName={style.active}>Music</NavLink></div>
            <div className={style.friends}>
                <div className={style.text}> Friends</div>
                <div className={style.item}>
                    {friends}
                </div>
            </div>
            <link href={`https://fonts.googleapis.com/css?family=Bree+Serif|Trade+Winds&display=swap`} rel="stylesheet"></link>
        </nav>
    );
}
export default NavBar;