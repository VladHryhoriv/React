import React , {PureComponent} from 'react'
import { AddPostThunk,setAuthMeThunk,getUserProfileThunk,getUserStatus,putUserStatus} from '../../../redux/profile-reducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';
import { withRedirect } from '../../../hoc/Recording';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getPosts, getProfile, getStatus } from '../../../redux/ProfileSelektors';

class MyPostContainer extends PureComponent {
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
    console.log("MPC")
    return <>
      <MyPost {...this.props} />
    </>
  }
}
const mapStateToProps = (state) => ({
  postsData: getPosts(state),
  profile: getProfile(state),
  status: getStatus(state)
})

export default compose(
  withRedirect,
  withRouter,
  connect(mapStateToProps, { AddPostThunk,setAuthMeThunk,getUserProfileThunk,getUserStatus,putUserStatus})
)(MyPostContainer)
