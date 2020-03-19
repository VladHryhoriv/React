import React from 'react'
import { AddPost, ChangeInPost ,setUserProfile } from '../../../redux/profile-reducer';
import MyPost from './MyPost';
import * as axios from 'axios'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MyPostContainer extends React.Component{
  componentDidMount(){
   let userId = this.props.match.params.userId;
   if(!userId){
     userId = 2;
   }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`,{
      withCredentials: true
    }).then(response => {
        this.props.setUserProfile(response.data)
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