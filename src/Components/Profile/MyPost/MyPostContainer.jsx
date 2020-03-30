import React from 'react'
import { AddPostThunk, ChangeInPost,setAuthMeThunk,getUserProfileThunk,setUserId,getUserStatus,putUserStatus} from '../../../redux/profile-reducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';
import { withRedirect } from '../../../hoc/Recording';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class MyPostContainer extends React.Component {
    async componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      this.props.setAuthMeThunk()
    }
    else{
      this.props.getUserProfileThunk(userId);
      this.props.getUserStatus(userId)
    }
    
  }
  render() {
    return <>
      <MyPost {...this.props} />
    </>
  }
}
const mapStateToProps = (state) => ({
  newPostChange: state.profilePage.newPostChange,
  postsData: state.profilePage.postsData,
  profile: state.profilePage.profile,
  fullName: state.profilePage.fullName,
  status:state.profilePage.status,
  userId:state.profilePage.userId
})

export default compose(
  withRedirect,
  withRouter,
  connect(mapStateToProps, { AddPostThunk, ChangeInPost,setAuthMeThunk,getUserProfileThunk,setUserId,getUserStatus,putUserStatus})
)(MyPostContainer)
