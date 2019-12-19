import React from  'react';
import { ReactComponent as  ShoppingIcon } from '.././assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';

const itemCount = {
    position: "absolute",
    fontSize : "10px",
    fontWeight: "bold",
    bottom: "0",
    left: "12px",
    top: "12px",
    right: "-4px"
}

const CartIcon = ({toggleCartHidden}) => (
    <div class= "mr-4  relative" onClick={toggleCartHidden}>
    <ShoppingIcon className="w-8 absolute top-2 flex "/>
    <span style={itemCount}>0</span>
    
    
    </div>
);
const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect (null, mapDispatchToProps)(CartIcon);
