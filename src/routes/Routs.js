import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/Category/Category";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/login/register/Register";
import News from "../pages/news/News";
import Profile from "../pages/others/terms/profile/Profile";
import Terms from "../pages/others/terms/Terms";
import PrivateRout from "./privaterout/PrivateRout";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRout><News></News></PrivateRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
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
                path: '/terms',
                element: <Terms></Terms>
            },
            {
                path: '/profile',
                element: <PrivateRout><Profile></Profile></PrivateRout>
            }
        ]
    }
])