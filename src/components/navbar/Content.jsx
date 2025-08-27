import React from "react";
import { Outlet, useLocation } from "react-router-dom";

function Content() {
    return (
        <div className=" min-h-screen ">
            <Outlet />
        </div>
    );
}

export default Content;
