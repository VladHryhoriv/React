import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const ProfileStatusHook = (props) => {
    let [editMode,setEditMode] = useState(false)
    let [status,setStatus] = useState(props.status)
    useEffect(()=>{
        setStatus(props.status)
    },[props.status])
    let ChangeTextInStatus=()=>{
        setEditMode(true)
    }
    let UnChangeTextInStatus=()=>{
        setEditMode(false)
        props.putUserStatus(status)
    }
    let onStatusChange = (e)=>{
        setStatus(e.currentTarget.value)
    }
    return <>
        {!editMode
            ? <div onDoubleClick={ChangeTextInStatus}><span><b>Status:</b>{props.status || "----"}</span></div>
            : <div><input autoFocus={true} type="text" defaultValue={status}
                onBlur={UnChangeTextInStatus}
                onChange={onStatusChange} />
            </div>}
    </>
}


export default ProfileStatusHook;