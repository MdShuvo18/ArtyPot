import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="p-5">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;