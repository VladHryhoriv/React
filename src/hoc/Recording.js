import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

let mapPropsToState = (state)=>({
    isAuth:state.auth.isAuth
})

export const withRedirect = (Component)=>{
    class RedirectComponent extends React.Component {
        render(){
            if(!this.props.isAuth) return <Redirect to='/login' />
            return <Component {...this.props}/>
        }
    }
    let ConnectRedirect = connect(mapPropsToState)(RedirectComponent)
    return ConnectRedirect;
}