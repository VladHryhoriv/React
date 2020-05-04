import React from 'react';
import style from './MyPost.module.css';
import OtherPost from '../OtherPost/OtherPost';
import Preloader from '../../Preloader/Preload';
import { AddPostReduxForm } from './AddPostReduxForm';
import { useState } from 'react';
import { ProfileData } from '../ProfileData/ProfileData';
import {ProfileDataEditReduxForm} from '../ProfileEditData/EditProfileData';

const MyPost = React.memo((props) => {
  let otherPosts = props.postsData.map((otherPost) => <OtherPost text={otherPost.text} key={otherPost.id} likeCount={otherPost.likeCount} />)

  if (!props.profile) {
    return <Preloader />
  }
  let onSubmitAddPost = (formData) => {
    props.AddPostThunk(formData.yourPost)
    console.log("After post")
  }
  let onSubmit =(formData)=>{
    props.UpdateProfile(formData).then(()=>{
      setEditMode(false)
    })
  }
  let onSavePhoto = (e)=>{
    if(e.target.files.length){
      props.savePhoto(e.target.files[0])
    }
  }
  let [edit,setEditMode] = useState(false)
  return (
    <div className={style.wrapper}>
      <div className={style.personData}>
      {!edit?<ProfileData owner={props.owner} setEditMode={setEditMode} profile={props.profile} status={props.status} putUserStatus={props.putUserStatus} />
      :<ProfileDataEditReduxForm isFetching={props.isFetching} onSavePhoto={onSavePhoto} initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} status={props.status} putUserStatus={props.putUserStatus}/>}
      </div>
      <div className={style.new_post}>
        <div className={style.text}> MyPost</div>
        <AddPostReduxForm onSubmit={onSubmitAddPost} />
      </div>
      {otherPosts}
      <link href={`https://fonts.googleapis.com/css?family=Kanit&display=swap`} rel="stylesheet"></link>
    </div>
  );
})

export default MyPost;