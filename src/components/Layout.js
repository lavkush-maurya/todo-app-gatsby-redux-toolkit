import React from "react";
import Navbar from "./Navbar";
import Switched from "./Swtch";

export default function Layout({ children }) {
  return (
    <div className="mainLayout">
      <div className="header">
        <Navbar />
        <Switched />
      </div>

      <div
        className="content"
        style={{ textAlign: "-webkit-center", marginTop: "80px" }}
      >
        {children}
      </div>
      <footer>
        <p>
          {" "}
          © 2023 - Created with 🖤 -{" "}
          <a
            className="black"
            href="http://lavkushgatsby.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lavkush Maurya
          </a>
        </p>
      </footer>
    </div>
  );
}
