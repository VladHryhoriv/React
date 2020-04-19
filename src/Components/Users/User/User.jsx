import React from 'react'
import userPhoto from '../../../assmeut/UserPhoto/user.png'
import style from '../User/User.module.css'
import { NavLink } from 'react-router-dom'


export const User = ({FollowingProgress,unfollowThunk,followThunk,users}) => {
    return <>
    {
        users.map(u => <div key={u.id}>
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
                        ? <button disabled={FollowingProgress.some(id => id === u.id)} onClick={() => {
                            unfollowThunk(u.id)
                        }} className={style.unfollow}>Unfollow</button>
                        : <button disabled={FollowingProgress.some(id => id === u.id)} onClick={() => {
                            followThunk(u.id)
                        }} className={style.follow}>Follow</button>}
                </div>
            </span>
        </div>)
    }
    </>
}