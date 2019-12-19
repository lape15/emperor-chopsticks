 // eslint-disable-next-line 
import React from 'react';
// import { Nav, NavItem } from 'reactstrap';
import {connect} from 'react-redux';
import {NavLink } from 'react-router-dom';
import {ReactComponent as Logo} from './assets/crown.svg';
import {auth} from '../firebase/firebase.util';
import CartIcon from './cart-icon/cart-icon.component';

import CartDropDown from './cart/cart-dropdown';

const position = {
  display: "flex",
  top: "90px",
  right: "40px",
  "z-index" : "5",
 position : "absolute",
 width: "240px",
 height: "340px",
 "flex-direction": "column",
 "padding": "20px",
 border: "1px solid black",
 backgroundcolor: "white",
 top: "90px",
 right: "40px"
}

const Header = ({currentUser, hidden}) => ( 
    <>
  <div class="flex justify-between wrap mb-4 text-black  bg-transparent  p-6 ">
 
    <div class="w-1/2 ml-8 mt-4"> <NavLink to="/" class="text-mono hover:text-black"><Logo/></NavLink></div>
    
    <div class=" w-1/2 flex justify-end ml-4  mt-8">
    
        <div class= "mr-4">
          <NavLink to="/shop" class="text-mono text-black hover:font-bold pointer ">BUY</NavLink></div>
        <div class= "mr-4">
          <NavLink to="/" class="text-mono text-black  hover:font-bold pointer">CONTACT</NavLink></div>
          
  
  {
    currentUser ? 
      <div class="text-mono text-black mr-4 hover:font-bold text-right pointer" onClick={() => auth.signOut()}> SIGN OUT</div>     : 
      <div class= "mr-4"><NavLink to="/sign-in" class="text-mono text-black  hover:font-bold pointer">SIGN IN</NavLink></div>
  }
  <CartIcon/>
  </div> 
  {
    hidden ? null :
  <div style={position}>
 <CartDropDown /></div>
}
 </div>
 
    </>
    )

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
        currentUser,
        hidden
})

export default connect(mapStateToProps) (Header);