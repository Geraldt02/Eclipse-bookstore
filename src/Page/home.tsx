import React from "react";
import { Outlet } from "react-router-dom";
import SideNavBar from "../components/Navbar/sideNavBar.tsx";

export default function Home() {
  return (
    <>
      <SideNavBar main={<Outlet />} />
    </>
  );
}
