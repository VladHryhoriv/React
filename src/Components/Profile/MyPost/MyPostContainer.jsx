import React , {PureComponent} from 'react'
import { AddPostThunk,setAuthMeThunk,getUserProfileThunk,getUserStatus,putUserStatus,UpdateProfile,savePhoto} from '../../../redux/profile-reducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getPosts, getProfile, getStatus, getAuthorizeUserId, getIsFetching } from '../../../redux/ProfileSelektors';

class MyPostContainer extends PureComponent {
    updateProfile = ()=>{
      let userId = this.props.match.params.userId;
      if (!userId) {
        userId = this.props.authorizeId;
        if(!userId){
          this.props.history.push("/login");
        }
      }
      this.props.getUserProfileThunk(userId);
      this.props.getUserStatus(userId)
    }
    componentDidMount() {
      this.updateProfile();
    }
    
    componentDidUpdate(prevProps,prevState,hz){
      if(this.props.match.params.userId !== prevProps.match.params.userId){
        this.updateProfile()
      }
    }
    
  render() {
    return <>
      <MyPost owner={!this.props.match.params.userId} {...this.props} />
    </>
  }
}
const mapStateToProps = (state) => ({
  postsData: getPosts(state),
  profile: getProfile(state),
  status: getStatus(state),
  authorizeId: getAuthorizeUserId(state),
  isFetching:getIsFetching(state)
})

export default compose(
  //withRedirect,
  withRouter,
  connect(mapStateToProps, { AddPostThunk,setAuthMeThunk,getUserProfileThunk,getUserStatus,putUserStatus,UpdateProfile,savePhoto})
)(MyPostContainer)
