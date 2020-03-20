import React from 'react'
import { AddPost, ChangeInPost, setUserProfile, setFullName } from '../../../redux/profile-reducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../../API/api';

class MyPostContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      profileAPI.getAuthMe().then(data => {
        userId = data.data.id
        profileAPI.getUserProfile(userId).then(response => {
          this.props.setUserProfile(response)
          debugger
          console.log(this.props.profile)
        })
      })
    }
    profileAPI.getUserProfile(userId).then(data => {
      this.props.setUserProfile(data)
    })
    
  }
  render() {
    console.log(this.props)
    return <>
      <MyPost {...this.props} />
    </>
  }
}
const mapStateToProps = (state) => ({
  newPostChange: state.profilePage.newPostChange,
  postsData: state.profilePage.postsData,
  profile: state.profilePage.profile,
  fullName: state.profilePage.fullName
})
let withRouterConnecting = withRouter(MyPostContainer)
const MyPostContainerConnect = connect(mapStateToProps, { AddPost, ChangeInPost, setUserProfile, setFullName })(withRouterConnecting)
export default MyPostContainerConnect;