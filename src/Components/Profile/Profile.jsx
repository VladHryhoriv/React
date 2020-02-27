import React from 'react';
import style from './Profile.module.css';
import MyPost from './MyPost/MyPost';


const Profile = (props) => {
  
  return (
    <div className={style.wrapper}>
      <div className={style.content_img}>
        <img src='https://2f13yq12csmv2yraq925m73i-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/149A0553-1024x512.jpg' alt='NoIMg'></img>
      </div>
      <MyPost OPE={props.for_Profile} myPost={props.myPost} newChangeText={props.newChangeText}/>
    </div>
  );
}
export default Profile;