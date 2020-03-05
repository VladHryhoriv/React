import React from 'react';
import style from './MyPost.module.css';
import OtherPost from '../OtherPost/OtherPost';
import { AddPostActionCreator, ChangeInPostActionCreator } from '../../../redux/profile-reducer';






const MyPost = (props) => {
  let otherPosts = props.OPE.postsData.map((otherPost) => <OtherPost text={otherPost.text} likeCount={otherPost.likeCount} />)
  let myPostActive = ()=>{
      props.dispatch(AddPostActionCreator());
  }
  let newChange = (e) => {
    let newtxt = e.target.value;
    props.dispatch(ChangeInPostActionCreator(newtxt));
  }
  return (
    <div className={style.wrapper}>
      <div className={style.person}>
        <div className={style.ava}>
          <img alt='NoImg' src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'></img>
        </div>
        <div className={style.name}>
          Diam
              <div className={style.about_person}>
            Something Text
              </div>
        </div>
      </div>
      <div className={style.new_post}>
        MyPost
        <input placeholder='your post' type='text' className={style.your_post}  onChange={newChange} value={props.OPE.newPostChange}></input>
        <input type='button' value='Send' className={style.but_send} onClick={myPostActive}></input>
      </div>
      {otherPosts}
    </div>
  );
}
export default MyPost;