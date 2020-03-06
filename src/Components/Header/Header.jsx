import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <link href={`https://fonts.googleapis.com/css?family=Trade+Winds&display=swap`} rel="stylesheet"></link>
            <div className={style.text}>
                Hill`s
                <div className={style.text2}>since 1967</div>
            </div>
        </header>
    );
}
export default Header;