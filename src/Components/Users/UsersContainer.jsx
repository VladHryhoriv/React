import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import * as axios from 'axios'
import { Follow, Unfollow, setUsers, setTotalUserCount, setCurrentPage, setIsFetching } from '../../redux/users-reducer'
import Preloader from '../Preloader/Preload'

class UserContainer extends React.Component {
	componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.userSize}`,{
            withCredentials: true
        }).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUserCount(response.data.totalCount);
		})
    }
	onPageChange = (numberPage) => {
        this.props.setIsFetching(true);
		this.props.setCurrentPage(numberPage)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${numberPage}&count=${this.props.userSize}`,{
            withCredentials: true
        }).then(response => {
            this.props.setIsFetching(false);    
            this.props.setUsers(response.data.items);
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
        isFetching:state.userPage.isFetching
    }
}

const UserContainerConnect = connect(mapStateToProps,{Follow,Unfollow,setUsers,setTotalUserCount,setCurrentPage,setIsFetching})(UserContainer)

export default UserContainerConnect;