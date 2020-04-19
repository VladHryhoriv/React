import React from 'react';
import style from './Users.module.css';
import { Paginator } from '../Common/Helpers/Paginator/Paginator';
import { User } from './User/User';

const Users = ({totalUserCount,userSize,currentPage,setCurrentPageThunk,onPageChange,users,FollowingProgress,followThunk,unfollowThunk,...props}) => {
	return (
		<div className={style.wrapper}>
			<Paginator totalUserCount={totalUserCount} userSize={userSize} 
			currentPage={currentPage} setCurrentPageThunk={setCurrentPageThunk} 
			onPageChange={onPageChange}/>
			<User FollowingProgress={FollowingProgress} followThunk={followThunk} unfollowThunk={unfollowThunk} users={users} />
		</div>
	)
}

export default Users;