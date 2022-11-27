import { createBrowserRouter } from "react-router-dom";
import DashboardMain from "../../Layout/DashboardMain";
import Main from "../../Layout/Main";
import NotFound from "../../Shared/NotFound/NotFound";
import AddProduct from "../AddProduct/AddProduct";
import AllBuyer from "../AllBuyer/AllBuyer";
import AllSeller from "../AllSeller/AllSeller";
import Blog from "../Blog/Blog";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import MyOrders from "../MyOrders/MyOrders";
import Myproducts from "../MyProducts/Myproducts";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Register from "../Register/Register";
import SingleCategory from "../SingleCategory/SingleCategory";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/:name',
                element: <PrivateRoute><SingleCategory></SingleCategory></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.name}`)
            },
            {
                path: '/myproducts',
                element: <Myproducts></Myproducts>,
            },
            {
                path: '/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/allbuyer',
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ])
    },
    {
        path: '/dashboard',
        element: <DashboardMain></DashboardMain>,
        children: ([
            {
                path: '/dashboard/products',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproducts',
                element: <Myproducts></Myproducts>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyer></AllBuyer>
            },
        ])
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;