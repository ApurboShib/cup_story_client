import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header/Header";



const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-7xl mx-auto"></div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
