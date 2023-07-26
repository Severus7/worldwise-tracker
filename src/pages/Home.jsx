import React from "react";
import { Link } from "react-router-dom";
import PageNav from "../../components/PageNav";
import AppNav from "../../components/AppNav";

const Home = () => {
  return (
    <div>
      <PageNav />
      <AppNav />

      <h1>WorldWise</h1>

      <Link to="/app">App</Link>
    </div>
  );
};

export default Home;
