import React from 'react';
import SHOPS_DATA from './ShopData';
import Preview from '../components/preview-collections/Preview'

export default class Shop extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collections : SHOPS_DATA
        }
    }
    
    render (){
        const {collections} = this.state;
        return ( <div class="flex -mx-2">
           { collections.map(({id,...otherCollectionProps}) => ( 
            <Preview key={id}{...otherCollectionProps}/>
           ))}
        </div>
        )
    }
}