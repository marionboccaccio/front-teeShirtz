import React from "react";
// import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AllTeeShirtz from "./components/AllTeeShirtz";

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <AllTeeShirtz />
      <Footer />
    </div>
  );
}

export default App;
