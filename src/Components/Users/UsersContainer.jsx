import { connect } from 'react-redux'
import User from './Usrers'
import { FollowAC, UnfollowAC, setUsers } from '../../redux/users-reducer'


let mapStateToProps = (state) => {
    return{
        users:state.userPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow:(userId)=>{
            dispatch(FollowAC(userId));
        },
        unfollow:(userId)=>{
            dispatch(UnfollowAC(userId));
        },
        setUsers:(users)=>{
            dispatch(setUsers(users));
        }
    }
}

const UserContainer = connect(mapStateToProps,mapDispatchToProps)(User)

export default UserContainer;