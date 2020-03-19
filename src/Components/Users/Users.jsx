import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assmeut/UserPhoto/user.png'
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../API/api';

const Users = (props) => {
	let pagesCount = Math.ceil(props.totalUserCount / props.userSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}
	return (
		<div className={style.wrapper}>
			<div>
				{
					pages.map(p => {
						return <span className={props.currentPage === p && style.active}
							onClick={(e) => { props.onPageChange(p) }}>{p}</span >
					})
				}
			</div>
			{
				props.users.map(u => <div key={u.id}>
					<span className={style.user}>
						<div className={style.userImg}>
							<NavLink to={`/profile/${u.id}`}><img className={style.userImg} src={u.photos.small != null ? u.photos.small : userPhoto} alt="" srcset="" /></NavLink>
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
								? <button onClick={() => {
									userAPI.Unfollow(u.id).then(()=>props.Unfollow(u.id))
								}} className={style.unfollow}>Unfollow</button>
								: <button onClick={() => {
									userAPI.Follow(u.id).then(()=>props.Follow(u.id))
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