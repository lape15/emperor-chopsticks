import React from 'react';
import  CollectionItem from '../collections/collection'

 const preview = ({title, items}) => (
    <div class="flex-wrap -mx-2 text-center">
    <p class="font-bold text-xl mb-2 ">{title.toUpperCase()}</p>
        { items
            .filter((item,index) => index < 4 )
            .map(({id, ...otherItemProps}) => (
            <CollectionItem key={id} {...otherItemProps}/>
           ))}
    </div>
 )
export default preview;
