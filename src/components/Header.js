import React from 'react';
// import { Nav, NavItem } from 'reactstrap';
import {NavLink } from 'react-router-dom';
import {ReactComponent as Logo} from './assets/crown.svg';
import {auth} from '../firebase/firebase.util'

const Header = ({currentUser}) => ( 
    <>
   <nav class="flex   flex-wrap bg-transparent  p-6">
  <div class="flex  justify-between items-center text-black  mr-6">
  <NavLink to="/" class="text-mono hover:text-black mr-6"><Logo/></NavLink>
  <div class="flex justify-end ">
  <NavLink to="/shop" class="text-mono text-black hover:font-bold pointer mr-6">BUY</NavLink>
  <NavLink to="/" class="text-mono text-black  hover:font-bold pointer mr-6">CONTACT</NavLink>
  
  {
    currentUser ? 
   <div class="text-mono text-black  hover:font-bold text-right pointer mr-6" onClick={() => auth.signOut()}> SIGN OUT</div>     : 
   <NavLink to="/sign-in" class="text-mono text-black  hover:font-bold pointer mr-6">SIGN IN</NavLink>
  }
  </div>
  </div>
  </nav>
    </>
    )

export default Header;