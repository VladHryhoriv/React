import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assmeut/UserPhoto/user.png'
import { NavLink } from 'react-router-dom';

const Users = (props) => {
	let pagesCount = Math.ceil(props.totalUserCount / props.userSize);
	let pages = [];
	let min,max =0
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	return (
		<div className={style.wrapper}>
			<div className={style.activePage}>
			<span className={style.prev} onClick={(e)=>{
				props.setCurrentPageThunk(props.currentPage-1)
				props.onPageChange(props.currentPage-1)
			}}>&#8592;</span>
				{
					pages.map(p => {
						min = props.currentPage-3
						max = props.currentPage+3
						if(p>min && p<max){
						return <span className={props.currentPage === p ? style.active : style.notActive}
							onClick={(e) => { props.onPageChange(p) }}>{p}</span >
						}
						else{
							return null
						}
					})
					
				}
				<span className={style.next} onClick={(e)=>{
				props.setCurrentPageThunk(props.currentPage+1)
				props.onPageChange(props.currentPage+1)
			}}>&#8594;</span>
			</div>
			{
				props.users.map(u => <div key={u.id}>
					<span className={style.user}>
						<div className={style.userImg}>
							<NavLink to={`/profile/${u.id}`}><img className={style.userImg} 
							src={u.photos.small != null ? u.photos.small : userPhoto} 
							alt="" srcset="" /></NavLink>
						</div>
						<div className={style.aboutUserNS}>
							<span className={style.aboutUser}>
								<div className={style.name}>{u.name}</div>
								<div className={style.status}>{u.status}</div>
							</span>
							<span className={style.locality}>
								<div>{"u.location.country"}</div>
								<div>{"u.location.city "}</div>
							</span>
						</div>
						<div className={style.button}>
							{u.followed
								? <button disabled={props.FollowingProgress.some(id => id === u.id)} onClick={() => {
									props.unfollowThunk(u.id)
								}} className={style.unfollow}>Unfollow</button>
								: <button disabled={props.FollowingProgress.some(id=>id===u.id)} onClick={() => {
									props.followThunk(u.id)
								}} className={style.follow}>Follow</button>}
						</div>
					</span>
				</div>
				)
			}
		</div>
	)
}

export default Users;