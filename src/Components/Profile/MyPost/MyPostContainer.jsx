import { AddPostActionCreator, ChangeInPostActionCreator } from '../../../redux/profile-reducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';

// const MyPostContainer = (props) => {
//   return <StoreContext.Consumer>
//     {
//       (store) => {
//         let postsData = store.getState().profilePage.postsData;
//         let newPostChange = store.getState().profilePage.newPostChange;
//         let myPostActive = () => {
//           store.dispatch(AddPostActionCreator());
//         }
//         let newChange = (newtxt) => {
//           store.dispatch(ChangeInPostActionCreator(newtxt));
//         }
//         return <MyPost postsData={postsData} 
//         AddPostAction={myPostActive} 
//         ChangeInPostAction={newChange} 
//         newPostChange={newPostChange} />
//       }
//     }
//   </StoreContext.Consumer>
// }

const mapStateToProps = (state) => {
  return{
    newPostChange:state.profilePage.newPostChange,
    postsData:state.profilePage.postsData
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    AddPostAction:()=>{
      dispatch(AddPostActionCreator());
    },
    ChangeInPostAction:(newtxt)=>{
      dispatch(ChangeInPostActionCreator(newtxt))
    }
  }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)
export default MyPostContainer;