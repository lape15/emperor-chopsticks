import React from 'react';
// import { Table } from 'reactstrap';

class Food extends React.Component{
    constructor(){
        super();
        this.state = {
            menu : [
                {
                    dish : 'Special fried rice and shredded Beef',
                    description : 'Rice,veggies mixed with sliced beef'
                },
                {
                    dish : 'Dim sung',
                    description : 'Chicken breast mixed with orisi'
                }
        ] 
        }

    }
    render() {
       const {menu} = this.state;
        return (
            <>
            <table class="table-auto">
            <thead>
                <tr>
             <th class="px-4 py-2">Dish</th>
            <th class="px-4 py-2">Description</th>
            </tr>
            </thead>
            <tbody>
            {menu.map((item, key) => 
                <tr key={key}>
                    <td class="border px-4 py-2">{item.dish}</td>
                    <td class="border px-4 py-2">{item.description}</td>
                </tr>
            )}
            </tbody>
            </table>
            
            </>
        )
    }
}

export default Food;