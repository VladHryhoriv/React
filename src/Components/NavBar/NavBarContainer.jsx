import React from 'react';
import Friends from './Friends/Friends';
import { connect } from 'react-redux';
import NavBar from './NavBar';

const mapStateToProps = (state) => {
    return {
        friends: state.navBar.Friends.map((f) => <Friends name={f.name} img={f.img} />)
    }
}

const NavBarContainer = connect(mapStateToProps)(NavBar)
export default NavBarContainer;
