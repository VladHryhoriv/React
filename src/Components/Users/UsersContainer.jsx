import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import {followThunk,unfollowThunk,getUsersThunk} from '../../redux/users-reducer'
import Preloader from '../Preloader/Preload'

class UserContainer extends React.Component {
	componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage,this.props.userSize)
    }
	onPageChange = (numberPage) => {
        this.props.getUsersThunk(numberPage,this.props.userSize)
	}
    
	render() {
		return <>
        {this.props.isFetching ? <Preloader/>:null}
        <Users
        users={this.props.users}
        onPageChange={this.onPageChange}
        FollowingProgress={this.props.FollowingProgress}
        followThunk = {this.props.followThunk}
        unfollowThunk = {this.props.unfollowThunk}
        totalUserCount = {this.props.totalUserCount}
        userSize = {this.props.userSize}
        currentPage={this.props.currentPage}
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

const UserContainerConnect = connect(mapStateToProps,{followThunk,unfollowThunk,getUsersThunk })(UserContainer)

export default UserContainerConnect;