import React from 'react'
import style from '../MyPost/MyPost.module.css';

export const Contact = ({ contactTitle, contactValue }) => {
    return <div className={style.contacts}>
      <b>{contactTitle}</b>:{contactValue}
    </div>
  }