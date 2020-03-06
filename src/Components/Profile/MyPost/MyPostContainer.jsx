import React from 'react';
import { AddPostActionCreator, ChangeInPostActionCreator } from '../../../redux/profile-reducer';
import MyPost from './MyPost';






const MyPostContainer = (props) => {
  let postsData = props.store.getState().profilePage.postsData;
  let newPostChange=props.store.getState().profilePage.newPostChange;
  let myPostActive = ()=>{
      props.store.dispatch(AddPostActionCreator());
  }
  let newChange = (newtxt) => {
    props.store.dispatch(ChangeInPostActionCreator(newtxt));
  }
  return (
    <MyPost postsData={postsData} AddPostAction={myPostActive} ChangeInPostAction={newChange} newPostChange={newPostChange}/>
  );
}
export default MyPostContainer;