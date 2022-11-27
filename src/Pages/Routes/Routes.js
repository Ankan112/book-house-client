import { createBrowserRouter } from "react-router-dom";
import DashboardMain from "../../Layout/DashboardMain";
import Main from "../../Layout/Main";
import NotFound from "../../Shared/NotFound/NotFound";
import AddProduct from "../AddProduct/AddProduct";
import AdminRoute from "../AdminRoute/AdminRoute";
import AllBuyer from "../AllBuyer/AllBuyer";
import AllSeller from "../AllSeller/AllSeller";
import Blog from "../Blog/Blog";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import MyOrders from "../MyOrders/MyOrders";
import Myproducts from "../MyProducts/Myproducts";
import Payment from "../Payment/Payment";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Register from "../Register/Register";
import SellerRoute from "../SellerRoute/SellerRoute";
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
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><Myproducts></Myproducts></SellerRoute>
            },
            {
                path: '/dashboard/myorders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/dashboard/myorders/payment',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>
            }
        ])
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;