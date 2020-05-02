import React from 'react'
import ProfileStatusHook from "../MyPost/ProfileStatusHook"
import { Contact } from "./Contacts"
import style from '../MyPost/MyPost.module.css';
import userPhoto from '../../../assmeut/UserPhoto/user.png'

export const ProfileData = ({ profile,status,putUserStatus,setEditMode,owner }) => {
    return <div>
      <div className={style.person}>
        <div className={style.ava}>
          <img src={profile.photos.large ? profile.photos.large : userPhoto} alt=''></img>
        </div>
        <div className={style.name}>
        {owner?<button onClick={()=>{setEditMode(true)}}>edit</button>:''}
          <div><b>Name :</b>{profile.fullName}</div>
          <div><b>About me :</b>{profile.aboutMe}</div>
          <div><b>Looking for a job :</b>{profile.lookingForAJob ? "yes" : "no"}</div>
          <div><b>Looking for a job description:</b>{profile.lookingForAJobDescription}</div>
          <div><b>Contacts :</b>{Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
          })}</div>
          <div className={style.about_person}>
          <ProfileStatusHook status={status} putUserStatus={putUserStatus} />
      </div>
        </div>
      </div>
    </div>
  }