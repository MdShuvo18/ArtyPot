import { useContext } from "react";
import { AuthContext } from "../AuthProviderContext/AuthProviderContext";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname)
    if (loading) {
        return <div className="w-16 h-16 ml-[600px] border-4 border-dashed rounded-full animate-spin dark:border-l-purple-950"></div>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoutes;