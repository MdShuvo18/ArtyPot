import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllArtandCraft from "../Pages/AllArtandCraft";
import AddCraftItem from "../Pages/AddCraftItem";
import MyArtandCraftList from "../Pages/MyArtandCraftList";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/allArtandCraftsItem',
                element: <AllArtandCraft></AllArtandCraft>
            },
            {
                path: '/AddCraftItem',
                element: <AddCraftItem></AddCraftItem>
            },
            {
                path:'/MyArtandCraftList',
                element:<MyArtandCraftList></MyArtandCraftList>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ],
    },
]);

export default router;