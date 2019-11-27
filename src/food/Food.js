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
            <table>
            <tr>
             <th scope="col">Dish</th>
            <th scope="col">Description</th>
            </tr>
            {menu.map((item, key) => 
                <tr key={key}>
                    <td>{item.dish}</td>
                    <td>{item.description}</td>
                </tr>
            )}
            </table>
            </>
        )
    }
}

export default Food;