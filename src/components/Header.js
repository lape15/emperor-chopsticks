import React from 'react';
// import { Nav, NavItem } from 'reactstrap';
import {NavLink } from 'react-router-dom';

class Header extends React.Component {

    
    render(){
  return (
   <>
  <h2 style={{textAlign: "center"}}>Welcome to chopsticks</h2>
  <NavLink to="/menu">Food</NavLink>
   
  <NavLink to="/">Home</NavLink>
  <NavLink to="/">Drinks</NavLink>
  <NavLink to="/menu">Food</NavLink>
  <NavLink disabled to="/">Email</NavLink>
    <hr></hr>
    </>
     );
    };
}

export default Header;