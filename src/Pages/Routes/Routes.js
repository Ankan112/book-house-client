import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import NotFound from "../../Shared/NotFound/NotFound";
import Blog from "../Blog/Blog";
import Home from "../Home/Home/Home";

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
            }
        ])
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])

export default router;