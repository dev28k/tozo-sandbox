// import logo from "./logo.svg";
// import "./App.css";
import React, { useEffect, useState } from "react";
import Routerr from "./components/routes/Route";
import Navbar from "./components/Navbar";
import HeaderBar from "./components/HeaderBar";

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: "#F5F5F5", width: "99.7%" }}
      className="row col-sm-12 g-0"
    >
      <div className="col-sm-2">
        <Navbar />
      </div>

      <div className="col-sm-10">
        <div className="col-sm-12">
          <HeaderBar />
        </div>
        <div className="col-sm-12" style={{ margin: "0.1%" }}>
          <Routerr />
        </div>
      </div>
    </div>
  );
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default App;
