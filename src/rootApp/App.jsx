import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import "../css/main.scss";
import Routes from "./routes";

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Routes />
    </MainLayout>
  </BrowserRouter>
);

export default App;
