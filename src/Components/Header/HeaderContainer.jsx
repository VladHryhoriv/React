import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUser } from '../../redux/auth-reducer';
import { headerAPI } from '../../API/api';

class HeaderContainer extends React.Component {
    componentDidMount(){
        headerAPI.getAuthMe().then((data)=>{
            this.props.setAuthUser(data.data)
        })
    }
    render(){
        return <Header {...this.props}/>
    }
}
const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
    email:state.auth.email,
})
export default connect(mapStateToProps,{setAuthUser})(HeaderContainer);