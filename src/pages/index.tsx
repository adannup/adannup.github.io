import React from "react";
import { Helmet } from "react-helmet";

import "./App.scss";

const IndexPage = () => {
  return (
    <main className="app">
      <Helmet>
        <title>Agave {"{.}"} dev</title>
      </Helmet>
      <h1 className="app__title">
        Agave <span>{"{.}"}</span> dev
      </h1>
      <h2 className="app__subtitle">
        Just another programming blog and personal journal
      </h2>
    </main>
  );
};

export default IndexPage;
