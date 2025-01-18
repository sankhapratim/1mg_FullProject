import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { MainRoutes } from "./Routes/mainroutes";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
        <MainRoutes/>
    </div>
  )
}

export default App;
