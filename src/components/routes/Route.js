import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
import Dashboard from "../Dashboard";
import About from "../About/About";
import PublishAll from "../PublishAll/PublishAll";
import RSSFeed from "../RSSfeed/RSS";

export default function Routerr() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/publishAll" element={<PublishAll />} />
        <Route exact path="/rss" element={<RSSFeed />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
