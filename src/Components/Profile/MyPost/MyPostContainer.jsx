import React from 'react'
import { AddPost, ChangeInPost,setAuthMeThunk,getUserProfileThunk} from '../../../redux/profile-reducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';
import { withRedirect } from '../../../hoc/Recording';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class MyPostContainer extends React.Component {
  componentDidMount() {
    debugger
    let userId = this.props.match.params.userId;
    if (!userId) {
      this.props.setAuthMeThunk(userId)
    }
    this.props.getUserProfileThunk(userId);
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
  fullName: state.profilePage.fullName
})

export default compose(
  withRouter,
  withRedirect,
  connect(mapStateToProps, { AddPost, ChangeInPost,setAuthMeThunk,getUserProfileThunk })
)(MyPostContainer)
