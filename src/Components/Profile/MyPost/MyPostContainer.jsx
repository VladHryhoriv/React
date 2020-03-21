import React from 'react'
import { AddPost, ChangeInPost,setAuthMeThunk,getUserProfileThunk} from '../../../redux/profile-reducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MyPostContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      this.props.setAuthMeThunk(userId)
    }
    this.props.getUserProfileThunk(userId);
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
const MyPostContainerConnect = connect(mapStateToProps, { AddPost, ChangeInPost,setAuthMeThunk,getUserProfileThunk })(withRouterConnecting)
export default MyPostContainerConnect;