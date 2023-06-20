import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="mainLayout">
      <div className="header">
        <Navbar />
      </div>
      <div
        className="content"
        style={{ textAlign: "-webkit-center", marginTop: "80px" }}
      >
        {children}
      </div>
    </div>
  );
}
