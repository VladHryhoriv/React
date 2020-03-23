import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import {getFollowThunk,getUnfollowThunk,getUsersThunk,getCurrentPageThunk} from '../../redux/users-reducer'
import Preloader from '../Preloader/Preload'
import { withRedirect } from '../../hoc/Recording'
import { compose } from 'redux'

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
        followThunk = {this.props.getFollowThunk}
        unfollowThunk = {this.props.getUnfollowThunk}
        totalUserCount = {this.props.totalUserCount}
        userSize = {this.props.userSize}
        currentPage={this.props.currentPage}
        setCurrentPageThunk = {this.props.getCurrentPageThunk}
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

export default compose(
    withRedirect,
    connect(mapStateToProps,{getFollowThunk,getUnfollowThunk,getUsersThunk,getCurrentPageThunk })
)(UserContainer)

