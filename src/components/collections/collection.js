import React from 'react';

const CollectionItem = ({id, name, price, imageUrl}) => (
    <div class="flex flex-wrap justify-center -mx-2 mb-4 mr-4 p-16 w-auto h-48" style={{
        backgroundImage: `url(${imageUrl})`
    }}>
    <div class="inline-flex  justify-end text-black bg-transparent hover:bg-white p-1 m-2 cursor-pointer" >
    <div class="font-mono text-left text-base ">{name}</div>
    <div class="font-mono  text-base ">Price: ${price}</div>
    </div>
    </div>
)
export default CollectionItem;