import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assmeut/UserPhoto/user.png'
import { NavLink } from 'react-router-dom';

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
					<span>
						<div>
							<NavLink to = {`/profile/${u.id}`}><img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" srcset="" /></NavLink>
						</div>
						<div>
							{u.followed
								? <button onClick={() => { props.Unfollow(u.id) }}>Unfollow</button>
								: <button onClick={() => { props.Follow(u.id) }}>Follow</button>}
						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{"u.location.country"}</div>
							<div>{"u.location.city "}</div>
						</span>
					</span>
				</div>
				)
			}
		</div>
	)
}

export default Users;