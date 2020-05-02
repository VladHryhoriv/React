import React from 'react'
import ProfileStatusHook from '../MyPost/ProfileStatusHook'
import { reduxForm } from 'redux-form'
import { Input } from '../../Common/FormInput/FormInput'
import style from '../MyPost/MyPost.module.css';
import userPhoto from '../../../assmeut/UserPhoto/user.png'
import { createField } from '../../Common/Field/Field'
import { require, MaxLength } from '../../../Validators/Validate';



const ProfileDataEdit = ({ profile,status,putUserStatus,handleSubmit,error,onSavePhoto,isFetching })=>{
  let maxLength30 = MaxLength(30);
    return <form onSubmit={handleSubmit}>
      <div className={style.person}>
        <div className={style.ava}>
          <img src={profile.photos.large ? profile.photos.large : userPhoto} alt=''></img>
          <div>
            <input type="file" onChange = {(e)=>onSavePhoto(e)}/>
            </div>
        </div>
        <div className={style.name}>
        <button disabled={isFetching}>save</button>
        {error?<div className={style.someError}>{error}</div>:""}
          <div><b>Name :</b>{createField('Name','fullName','text',Input,[require,maxLength30],'style.name','')} </div>
          <div><b>About me :</b>{createField('About me','aboutMe','textarea',Input,[require],'')}</div>
          <div><b>Looking for a job :</b>{createField('lookingForAJob','lookingForAJob','checkbox',Input,[],'')}</div>
          <div><b>Looking for a job description:</b>{createField('','lookingForAJobDescription','textarea',Input,[require],'')}</div>
          <div><b>Contacts :</b>{Object.keys(profile.contacts).map(key => {
            return <div>
              <b>{key}:{createField('','contacts.'+key,'text',Input,[],'',null,key={key})}</b>
            </div>
          })}</div>
          <div className={style.about_person}>
          <ProfileStatusHook status={status} putUserStatus={putUserStatus} />
      </div>
        </div>
      </div>
    </form>
  }
  

export const ProfileDataEditReduxForm = reduxForm({form:"edit-profile"})(ProfileDataEdit)
