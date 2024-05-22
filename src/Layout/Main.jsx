// import React from 'react';

import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import NavBar from "../Shared/NavBar";

const Main = () => {

    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login');

    return (
        <div>
            {/* <NavBar></NavBar> */}
            {noHeaderFooter || <NavBar></NavBar>}
            <div className="py-16">
            <Outlet></Outlet>
            </div>
            {/* <Footer></Footer> */}
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;