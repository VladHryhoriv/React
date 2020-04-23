import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    ChangeTextInStatus = () => {
        console.log(this)
        this.setState({
            editMode: true
        })
    }
    UnChangeTextInStatus = () => {
        this.setState({
            editMode: false
        })
        this.props.putUserStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(thisStatus,prevStatus){
        if(thisStatus.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }
    render() {
        return <>
            {!this.state.editMode
                ? <div><span onDoubleClick={this.ChangeTextInStatus}>{this.props.status || "----"}</span></div>
                : <div><input autoFocus={true} type="text" defaultValue={this.props.status} 
                onBlur={this.UnChangeTextInStatus} 
                onChange={this.onStatusChange} />
                </div>}
        </>
    }
}

export default ProfileStatus;