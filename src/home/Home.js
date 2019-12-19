import React from 'react';
// import { Route, Switch } from "react-router-dom";
// import Food from '../food/Food'

class Home extends React.Component {
    state = {
        stores : [
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            }
          ]
    }
    render(){
        // const {stores} = this.state;
        
           let displayStore = this.state.stores.map(({title, id, imageUrl, size}) => ( 
            <div class="text-black-700  bg-center px-4 border-2 border-black py-2 m-2 h-64 w-64 ml-6 mr-6 mt-4" key={id}  style={{
               backgroundImage: `url(${imageUrl})`
            }}>
           <div class="text-black text-center w-30 bg-transparent hover:bg-white px-6 py-1 m-2 cursor-pointer" >
               <p class="font-mono text-xl mb-2 ">{title.toUpperCase()}</p>
               
            <i class="fas fa-shopping-cart"></i>
               </div>
           </div>
           
       
       ))
       return(
        <>
        <div class="flex flex-row flex-wrap   content-center overflow-auto ml-24 -mx-2 h-full w-9/12 text-center">
       {displayStore}
       </div>
        </>
        )
    }
}

export default Home;
