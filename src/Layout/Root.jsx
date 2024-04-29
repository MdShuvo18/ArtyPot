import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="p-5 bg-stone-300">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;