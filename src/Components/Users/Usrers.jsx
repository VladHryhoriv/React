import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assmeut/UserPhoto/user.png'

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
            props.setUsers(response.data.items);
        })
    }
    console.log(props.users)
    return (
        <div className={style.wrapper}>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            {console.log(u)}
                                <img src={u.userPhoto!=null?null:userPhoto} alt="" srcset="" />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                            </div>
                    </span>
                    <span>
                    <span>
                        {console.log()}
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