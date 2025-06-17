import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

export default function MainLayout() {
    return (
      <div className="mx-auto px-3 lg:px-5 my-7 md:my-9 xl:px-36">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  }
