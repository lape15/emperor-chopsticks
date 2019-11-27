import Home from '../home/Home';
import Food from '../food/Food';
// import { on } from 'cluster';

var routes = [
    {
        path: "/",
        exact: true,
        name: "home",
        component: Home,
    },
    {
        path: "/menu",
        name: "food",
        component: Food
    }
]

export default routes;