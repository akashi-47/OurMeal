import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../helpers/sidebar";

import Footer from "./footer";
import React from "react";
export default function AdminLayout() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="admin-panel mt-4 grid grid-cols-1 space-y-5">
        <Sidebar></Sidebar>
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
