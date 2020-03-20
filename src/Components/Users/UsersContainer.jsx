import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { Follow, Unfollow, setUsers, setTotalUserCount, setCurrentPage, setIsFetching, isToggleFollowing} from '../../redux/users-reducer'
import Preloader from '../Preloader/Preload'
import { userAPI } from '../../API/api'

class UserContainer extends React.Component {
	componentDidMount() {
        this.props.setIsFetching(true);
        userAPI.getUser(this.props.currentPage,this.props.userSize).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUserCount(data.totalCount);
		})
    }
	onPageChange = (numberPage) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(numberPage)
        userAPI.getUserOnChange(numberPage,this.props.userSize).then(data => {
            this.props.setIsFetching(false);    
            this.props.setUsers(data.items);
		})
	}
    
	render() {
		return <>
        {this.props.isFetching ? <Preloader/>:null}
        <Users
        users={this.props.users}
        totalUserCount={this.props.totalUserCount}
        userSize={this.props.userSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        Unfollow={this.props.Unfollow}
        Follow={this.props.Follow}
        FollowingProgress={this.props.FollowingProgress}
        isToggleFollowing={this.props.isToggleFollowing}
        />
        </>
	}
}

let mapStateToProps = (state) => {
    return{
        users:state.userPage.users,
        totalUserCount:state.userPage.totalUserCount,
        currentPage:state.userPage.currentPage,
        userSize:state.userPage.userSize,
        isFetching:state.userPage.isFetching,
        FollowingProgress:state.userPage.FollowingProgress,
    }
}

const UserContainerConnect = connect(mapStateToProps,{Follow,Unfollow,setUsers,setTotalUserCount,setCurrentPage,setIsFetching,isToggleFollowing })(UserContainer)

export default UserContainerConnect;