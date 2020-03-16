import React from 'react';
import style from './MyPost.module.css';
import OtherPost from '../OtherPost/OtherPost';
import Preloader from '../../Preloader/Preload';


const MyPost = (props) => {
  let otherPosts = props.postsData.map((otherPost) => <OtherPost text={otherPost.text} key={otherPost.id} likeCount={otherPost.likeCount} />)
  let myPostActive = ()=>{
      props.AddPost();
  }
  let newChange = (e) => {
    let newtxt = e.target.value;
    props.ChangeInPost(newtxt)
  }
  debugger
  if(!props.profile){
    return <Preloader/>
  }
  return (
    
    <div className={style.wrapper}>
      <div className={style.person}>
        <div className={style.ava}>
          <img alt='NoImg' src={props.profile.photos}></img>
        </div>
        <div className={style.name}>
          Diam
              <div className={style.about_person}>
            Something Text
              </div>
        </div>
      </div>
      <div className={style.new_post}>
        <div className={style.text}> MyPost</div>
        <input placeholder='The best site for PROGRAMING' type='text' className={style.your_post} onChange={newChange} value={props.newPostChange}></input>
        <div className={style.wrapper_button}>
          <input type='button' value="Send" className={style.but_send} onClick={myPostActive}></input>
        </div>
      </div>
      {otherPosts}
      <link href={`https://fonts.googleapis.com/css?family=Kanit&display=swap`} rel="stylesheet"></link>
    </div>
  );
}
export default MyPost;