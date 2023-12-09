
import { Outlet } from "react-router-dom";
import { useRef } from "react";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


const Layout = () => {

    const ref = useRef(null);

    return (<>
        <div ref={ref} className="overflow-auto min-h-screen flex flex-col">
            {/* <Header /> */}
            <Navbar />
            <div className="w-full flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    </>)
}

export default Layout;