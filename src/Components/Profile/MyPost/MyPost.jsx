import React from 'react';
import style from './MyPost.module.css';
import OtherPost from '../OtherPost/OtherPost';
import Preloader from '../../Preloader/Preload';
import userPhoto from '../../../assmeut/UserPhoto/user.png'
import ProfileStatus from './ProfileStatus';
import { AddPostReduxForm } from './AddPostReduxForm';


const MyPost = (props) => {
  let otherPosts = props.postsData.map((otherPost) => <OtherPost text={otherPost.text} key={otherPost.id} likeCount={otherPost.likeCount} />)
  
  if(!props.profile){
    return <Preloader/>
  }
  let onSubmit=(formData)=>{
    props.AddPostThunk(formData.yourPost)
  }
  return (
    
    <div className={style.wrapper}>
      <div className={style.person}>
        <div className={style.ava}>
          <img src={props.profile.photos.large ? props.profile.photos.large:userPhoto} alt=''></img>
        </div>
        <div className={style.name}>
          {props.profile.fullName}
              <div className={style.about_person}>
                  <ProfileStatus status={props.status} putUserStatus={props.putUserStatus}/>
              </div>
        </div>
      </div>
      <div className={style.new_post}>
        <div className={style.text}> MyPost</div>
        <AddPostReduxForm onSubmit={onSubmit}/>
      </div>
      {otherPosts}
      <link href={`https://fonts.googleapis.com/css?family=Kanit&display=swap`} rel="stylesheet"></link>
    </div>
  );
}
export default MyPost;