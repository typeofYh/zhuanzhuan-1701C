//登陆
import islogin from '@/components/islogin'
import {
    Login,
    Home,
    HomeIndex,
    HomeOrder
} from '../views/'


const routes = [
    {
       path:'/',
       redirect:'/login' 
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/home', ///home/index
        component:islogin(Home),  //Home
        children:[
            {
                path:'/home/index', //首页
                component:HomeIndex
            },
            {
                path:'/home/order/:name', //订单
                component:HomeOrder
            },
            {
                path:'/home',
                redirect:'/home/index'
            }
        ]
    }
]

export default routes;