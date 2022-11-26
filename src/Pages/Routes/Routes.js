import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import NotFound from "../../Shared/NotFound/NotFound";
import AddProduct from "../AddProduct/AddProduct";
import Blog from "../Blog/Blog";
import Home from "../Home/Home/Home";
import Login from "../Login/Login";
import Myproducts from "../MyProducts/Myproducts";
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
                path: '/products',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/category/:name',
                element: <SingleCategory></SingleCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.name}`)
            },
            {
                path: '/myproducts',
                element: <Myproducts></Myproducts>,

            },
        ])
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;