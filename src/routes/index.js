import Home from '../home/Home';
import Shop from '../pages/Shop';

// import { on } from 'cluster';

var routes = [
    {
        path: "/",
        exact: true,
        name: "home",
        component: Home,
    },
    {
        path: "/shop",
        name: "shop",
        component: Shop
    }
  
]

export default routes;