import React from "react";
import * as styles from "../styles/todo.module.css";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <div style={{ textAlign: "-webkit-center", marginTop: "80px" }}>
        <h1>Home Page</h1>
        <div style={{ display: "inline-grid" }}>
          <Link className={styles.btnHome} to="/todo">
            ADD TASK
          </Link>
          <Link to="/view" className={styles.btnHome}>
            MY TASKS
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
