import React from 'react'
import style from './Friends.module.css'

const Friends = (props)=>{
    return(
        <div className={style.wrapper}>
           <img src={props.img} alt="" className={style.img}/>
            {props.name}
        </div>
    );
}
export default Friends;