import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllArtandCraft from "../Pages/AllArtandCraft";
import AddCraftItem from "../Pages/AddCraftItem";
import MyArtandCraftList from "../Pages/MyArtandCraftList";
import PrivateRoutes from "../Pages/PrivateRoute";
import CraftItemDetails from "../Pages/CraftItemDetails";
import Update from "../components/Update";
import MyCategorySection from "../components/MyCategorySection";
import SubcategorySection from "../components/SubcategorySection";
import SubcategoryViewDetails from "../components/SubcategoryViewDetails";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://art-and-craft-store-server.vercel.app/addCraftItem')
            },
            {
                path: "/myCategorySection",
                element: <MyCategorySection></MyCategorySection>,
                // loader: () => fetch('http://localhost:5000/allArtandCraft')
            },
            {
                path:'/subcategorysection/:subcategory_Name',
                element:<SubcategorySection></SubcategorySection>,
                loader:({params})=>fetch(`art-and-craft-store-server.vercel.app/subcategorysection/${params.subcategory_Name}`)
            },
            {
                path:'/subCategoryViewDetails/:id',
                element:<SubcategoryViewDetails></SubcategoryViewDetails>,
                loader:()=>fetch('https://art-and-craft-store-server.vercel.app/addCraftItem')

            },
            {
                path: '/allArtandCraftsItem',
                element: <AllArtandCraft></AllArtandCraft>,
                loader: () => fetch('https://art-and-craft-store-server.vercel.app/addCraftItem')
            },
            {
                path: '/AddCraftItem',
                element: <PrivateRoutes><AddCraftItem></AddCraftItem></PrivateRoutes>
            },
            {
                path: '/craftItemDetails/:id',
                element: <PrivateRoutes><CraftItemDetails></CraftItemDetails></PrivateRoutes>,
                loader: () => fetch('https://art-and-craft-store-server.vercel.app/addCraftItem')
            },
            {
                path: '/MyArtandCraftList',
                element: <PrivateRoutes><MyArtandCraftList></MyArtandCraftList></PrivateRoutes>
            },
            {
                path: '/updateList/:id',
                element: <PrivateRoutes><Update></Update></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://art-and-craft-store-server.vercel.app/${params.id}`)
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