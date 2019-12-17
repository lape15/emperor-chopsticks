import React from 'react';
// import { Nav, NavItem } from 'reactstrap';
import {connect} from 'react-redux';
import {NavLink } from 'react-router-dom';
import {ReactComponent as Logo} from './assets/crown.svg';
import {auth} from '../firebase/firebase.util'

const Header = ({currentUser}) => ( 
    <>
  <div class="flex justify-between wrap mb-4 text-black  bg-transparent  p-6 ">
    <div class="w-1/2 ml-8 mt-4"> <NavLink to="/" class="text-mono hover:text-black"><Logo/></NavLink></div>
    <div class=" w-1/2 flex justify-end ml-12  mt-8">
        <div class= "mr-4">
          <NavLink to="/shop" class="text-mono text-black hover:font-bold pointer ">BUY</NavLink></div>
        <div class= "mr-4">
          <NavLink to="/" class="text-mono text-black  hover:font-bold pointer">CONTACT</NavLink></div>
  
  {
    currentUser ? 
      <div class="text-mono text-black mr-4 hover:font-bold text-right pointer" onClick={() => auth.signOut()}> SIGN OUT</div>     : 
      <div class= "mr-4"><NavLink to="/sign-in" class="text-mono text-black  hover:font-bold pointer">SIGN IN</NavLink></div>
  }
  </div>
  </div>
  
    </>
    )

const mapStateToProps = state => ({
        currentUser : state.user.currentUser
})

export default connect(mapStateToProps) (Header);