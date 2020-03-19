import React from 'react'
import { AddPost, ChangeInPost ,setUserProfile } from '../../../redux/profile-reducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../../API/api';

class MyPostContainer extends React.Component{
  componentDidMount(){
   let userId = this.props.match.params.userId;
   if(!userId){
     userId = 2;
   }
   profileAPI.getUserProfile(userId).then(data => {
        this.props.setUserProfile(data)
    })
    
  }
  render(){
    console.log(this.props)
    return<>
      <MyPost {...this.props} />
    </>
  }
}
const mapStateToProps = (state) => ({
    newPostChange:state.profilePage.newPostChange,
    postsData:state.profilePage.postsData,
    profile:state.profilePage.profile,
    fullName:state.profilePage.fullName
})
let withRouterConnecting = withRouter(MyPostContainer)
const MyPostContainerConnect = connect(mapStateToProps,{AddPost,ChangeInPost,setUserProfile})(withRouterConnecting)
export default MyPostContainerConnect;