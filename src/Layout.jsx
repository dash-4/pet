import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000000]">
      <Header />
    <main className="flex flex-1 justify-center items-center">
      <Outlet /> 
    </main>
    <Footer />
    </div>
  );
}

export default Layout;