import React from 'react';

 const preview = ({title, items}) => (
    <div class="flex-wrap -mx-2">
    <p class="font-mono text-xl mb-2 ">{title.toUpperCase()}</p>
        { items.map(item => (
            <div class=" bg-auto flex-1 text-black-700 text-center bg-center px-4 py-2 m-2 h-48 w-48 " key={item.id}>
            <p class="font-mono text-xl mb-2 ">{item.name}</p>
            </div>
         ))}
    </div>
 )
export default preview;
