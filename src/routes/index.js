import Home from '../home/Home';
import Shop from '../pages/Shop';
import SignInandSignUp from '../components/sign-in-and-sign-up/SignIn-SignUp'

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
    },
    {
        path: "/sign-in",
        name: "sign-in-sign-up",
        component: SignInandSignUp
    }
  
  
]

export default routes;