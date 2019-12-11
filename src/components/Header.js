import React from 'react';
// import { Nav, NavItem } from 'reactstrap';
import {NavLink } from 'react-router-dom';

class Header extends React.Component {

    
    render(){
  return (
   <>
   <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
  <NavLink to="/"><span class="inline-block mt-4 lg:inline-block lg:mt-0 text-mono hover:text-black mr-4">SHOPIFY</span></NavLink>
  <NavLink to="/shop"><span class="inline-block mt-4 lg:inline-block lg:mt-0 text-mono hover:text-black mr-4">BUY</span></NavLink>
  <NavLink to="/"><span  class="inline-block mt-4 lg:inline-block lg:mt-0 text-mono hover:text-black mr-4">SELL</span></NavLink>
  <NavLink to="/"><span class="inline-block mt-4 lg:inline-block lg:mt-0 text-mono hover:text-black mr-4">COMPLAIN</span></NavLink>
 <NavLink disabled to="/"><span class="inline-block mt-4 lg:inline-block lg:mt-0 text-mono hover:text-black mr-4">Contact Us</span></NavLink>
  </div>
  </nav>
    </>
     );
    };
}

export default Header;