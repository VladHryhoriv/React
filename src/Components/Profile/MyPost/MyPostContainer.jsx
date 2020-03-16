import React from 'react'
import { AddPost, ChangeInPost ,setUserProfile } from '../../../redux/profile-reducer';
import MyPost from './MyPost';
import * as axios from 'axios'
import { connect } from 'react-redux';

class MyPostContainer extends React.Component{
  componentDidMount(){
    
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response => {
        this.props.setUserProfile(response.data)
		})
  }
  render(){
    
    return<>
      <MyPost {...this.props} profile={this.props.profile}/>
    </>
  }
}
const mapStateToProps = (state) => ({
    newPostChange:state.profilePage.newPostChange,
    postsData:state.profilePage.postsData,
    profile:state.profilePage.profile
})

const MyPostContainerConnect = connect(mapStateToProps,{AddPost,ChangeInPost,setUserProfile})(MyPostContainer)
export default MyPostContainerConnect;