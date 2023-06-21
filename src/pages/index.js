import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <div style={{ textAlign: "-webkit-center", marginTop: "80px" }}>
        <h1>Home Page</h1>
        <div style={{ display: "inline-grid" }}>
          <Link className="btnHome" to="/todo">
            ADD TASK 🗒
          </Link>
          <Link to="/view" className="btnHome">
            MY TASKS 📔
          </Link>
          <Link
            to="https://lavkushgatsby.netlify.app/projects/"
            className="btnHome"
          >
            To See More Projects ↗
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
