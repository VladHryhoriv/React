import React from 'react';
import style from './OtherPost.module.css';

const OtherPost = (props) => {
  return (
    <div className={style.posts}>
      <div className={style.post}>
        <div className={style.ava}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpFi4uPtGAjuIoWYLMxFdaIkt4BHKBFxX5IwmKVua56EDgAy_f' alt='NoImg'></img>
        </div>
        {props.text}
    </div>
    <div className={style.likeCount}>
      Like {props.likeCount}
    </div>
    </div>
  );
}
export default OtherPost;